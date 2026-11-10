import webpush from 'web-push';
import { query } from '../config/database';

// Evening practice reminders by web push (works in Android browsers and in the
// installed app on iPhone, iOS 16.4+). The server's push keys come from
// VAPID_PUBLIC_KEY / VAPID_PRIVATE_KEY, or are created once and kept in
// app_settings. Between 7 and 9 pm India time, a student who has not met their
// daily goal gets one reminder per day.

let publicKey: string | null = null;

export const pushPublicKey = () => publicKey;

const setting = async (key: string) => (await query('SELECT value FROM app_settings WHERE key = $1', [key]))[0]?.value as string | undefined;

export const setupPush = async () => {
  let pub = process.env.VAPID_PUBLIC_KEY;
  let priv = process.env.VAPID_PRIVATE_KEY;
  if (!pub || !priv) {
    pub = await setting('vapid_public');
    priv = await setting('vapid_private');
    if (!pub || !priv) {
      const keys = webpush.generateVAPIDKeys();
      await query(`INSERT INTO app_settings (key, value) VALUES ('vapid_public', $1), ('vapid_private', $2) ON CONFLICT (key) DO NOTHING`, [keys.publicKey, keys.privateKey]);
      pub = await setting('vapid_public');
      priv = await setting('vapid_private');
    }
  }
  webpush.setVapidDetails(`mailto:${process.env.PUSH_CONTACT_EMAIL || 'support@nadanaloga.com'}`, pub!, priv!);
  publicKey = pub!;
};

const TEXT = {
  en: (done: number, goal: number, streak: number) => ({
    title: done ? `${done} of ${goal} questions today` : `Your ${goal} questions for today`,
    body: streak > 1 ? `Keep your ${streak}-day streak going: 5 minutes of practice is enough.` : 'A few minutes of practice now keeps you on track.',
  }),
  ta: (done: number, goal: number, streak: number) => ({
    title: done ? `இன்று ${goal} இல் ${done} கேள்விகள்` : `இன்றைய ${goal} கேள்விகள்`,
    body: streak > 1 ? `உங்கள் ${streak} நாள் தொடர்ச்சியைத் தொடருங்கள்: 5 நிமிடப் பயிற்சி போதும்.` : 'இப்போது சில நிமிடப் பயிற்சி உங்களை முன்னேற்றும்.',
  }),
};

/** Sends the day's reminders (once per student per day). Safe to call often. */
export const sendReminders = async () => {
  if (!publicKey) return 0;
  const istHour = new Date(Date.now() + 5.5 * 3600000).getUTCHours();
  if (istHour < 19 || istHour >= 21) return 0;
  // Only one server instance sends at a time
  const [{ locked }] = await query('SELECT pg_try_advisory_lock(515151) AS locked');
  if (!locked) return 0;
  let sent = 0;
  try {
    const due = await query(
      `SELECT u.id, u.language, u.daily_goal,
              (SELECT count(*)::int FROM practice_log pl WHERE pl.user_id = u.id
                 AND (pl.answered_at AT TIME ZONE 'Asia/Kolkata')::date = (now() AT TIME ZONE 'Asia/Kolkata')::date) AS done
       FROM users u
       WHERE u.role = 'student' AND u.is_active
         AND (u.reminded_on IS NULL OR u.reminded_on < (now() AT TIME ZONE 'Asia/Kolkata')::date)
         AND EXISTS (SELECT 1 FROM push_subscriptions p WHERE p.user_id = u.id)`
    );
    for (const u of due) {
      await query(`UPDATE users SET reminded_on = (now() AT TIME ZONE 'Asia/Kolkata')::date WHERE id = $1`, [u.id]);
      if (u.done >= u.daily_goal) continue;
      const days = await query(
        `SELECT DISTINCT (answered_at AT TIME ZONE 'Asia/Kolkata')::date AS d FROM practice_log
         WHERE user_id = $1 AND answered_at >= now() - interval '60 days' ORDER BY d DESC`,
        [u.id]
      );
      // Days in a row up to yesterday (today is not done yet)
      let streak = 0;
      const cursor = new Date(Date.now() + 5.5 * 3600000);
      cursor.setUTCDate(cursor.getUTCDate() - 1);
      const set = new Set(days.map((r) => new Date(r.d).toISOString().slice(0, 10)));
      while (set.has(cursor.toISOString().slice(0, 10))) {
        streak++;
        cursor.setUTCDate(cursor.getUTCDate() - 1);
      }
      const message = TEXT[u.language === 'ta' ? 'ta' : 'en'](u.done, u.daily_goal, streak);
      const payload = JSON.stringify({ ...message, url: '/dashboard?view=practice', tag: 'daily-goal' });
      for (const sub of await query('SELECT id, endpoint, p256dh, auth FROM push_subscriptions WHERE user_id = $1', [u.id])) {
        try {
          await webpush.sendNotification({ endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } }, payload, { TTL: 3 * 3600 });
          sent++;
        } catch (error: any) {
          // The browser unsubscribed or the app was removed
          if (error.statusCode === 404 || error.statusCode === 410) await query('DELETE FROM push_subscriptions WHERE id = $1', [sub.id]);
        }
      }
    }
  } finally {
    await query('SELECT pg_advisory_unlock(515151)');
  }
  return sent;
};

export const startReminderJob = () => {
  const run = () => sendReminders().catch((error) => console.error('Reminder job error:', error.message));
  setInterval(run, 10 * 60 * 1000);
};
