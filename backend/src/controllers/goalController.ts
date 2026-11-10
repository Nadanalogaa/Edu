import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { query } from '../config/database';
import { HttpError } from '../utils/tenancy';
import { pushPublicKey } from '../utils/reminders';

// The student's daily practice goal and their evening reminder subscriptions.

const GOALS = [5, 10, 20, 30, 50];

const sendError = (res: Response, error: any, label: string) => {
  if (error instanceof HttpError) return res.status(error.status).json({ success: false, message: error.message });
  console.error(`${label} error:`, error);
  res.status(500).json({ success: false, message: error.message || `Error: ${label}` });
};

// @desc    Today's progress towards the daily goal, and whether reminders are on for this device
// @route   GET /api/student/goal?endpoint=
export const getGoal = async (req: AuthRequest, res: Response) => {
  try {
    const [row] = await query(
      `SELECT u.daily_goal,
              (SELECT count(*)::int FROM practice_log pl WHERE pl.user_id = u.id
                 AND (pl.answered_at AT TIME ZONE 'Asia/Kolkata')::date = (now() AT TIME ZONE 'Asia/Kolkata')::date) AS today,
              (SELECT count(*)::int FROM push_subscriptions p WHERE p.user_id = u.id) AS devices
       FROM users u WHERE u.id = $1`,
      [req.user._id]
    );
    const endpoint = typeof req.query.endpoint === 'string' ? req.query.endpoint : '';
    const thisDevice = endpoint ? (await query('SELECT 1 FROM push_subscriptions WHERE user_id = $1 AND endpoint = $2', [req.user._id, endpoint])).length > 0 : false;
    res.status(200).json({
      success: true,
      data: { goal: row.daily_goal, today: row.today, met: row.today >= row.daily_goal, choices: GOALS, reminders: { devices: row.devices, thisDevice }, pushKey: pushPublicKey() },
    });
  } catch (error: any) {
    sendError(res, error, 'Daily goal');
  }
};

// @route   PUT /api/student/goal  { goal }
export const setGoal = async (req: AuthRequest, res: Response) => {
  try {
    const goal = Number(req.body?.goal);
    if (!GOALS.includes(goal)) throw new HttpError(400, `Goal must be one of ${GOALS.join(', ')}`);
    await query('UPDATE users SET daily_goal = $2 WHERE id = $1', [req.user._id, goal]);
    res.status(200).json({ success: true, data: { goal } });
  } catch (error: any) {
    sendError(res, error, 'Set daily goal');
  }
};

// @desc    Turn on evening reminders on this device
// @route   POST /api/student/reminders  { subscription: PushSubscriptionJSON }
export const subscribeReminders = async (req: AuthRequest, res: Response) => {
  try {
    const sub = req.body?.subscription;
    const endpoint = String(sub?.endpoint || '');
    if (!/^https:\/\//.test(endpoint) || !sub?.keys?.p256dh || !sub?.keys?.auth) throw new HttpError(400, 'Invalid subscription');
    await query(
      `INSERT INTO push_subscriptions (user_id, endpoint, p256dh, auth) VALUES ($1, $2, $3, $4)
       ON CONFLICT (endpoint) DO UPDATE SET user_id = EXCLUDED.user_id, p256dh = EXCLUDED.p256dh, auth = EXCLUDED.auth`,
      [req.user._id, endpoint, sub.keys.p256dh, sub.keys.auth]
    );
    res.status(201).json({ success: true, message: 'Reminders on' });
  } catch (error: any) {
    sendError(res, error, 'Turn on reminders');
  }
};

// @route   DELETE /api/student/reminders  { endpoint }
export const unsubscribeReminders = async (req: AuthRequest, res: Response) => {
  try {
    await query('DELETE FROM push_subscriptions WHERE user_id = $1 AND endpoint = $2', [req.user._id, String(req.body?.endpoint || '')]);
    res.status(200).json({ success: true, message: 'Reminders off' });
  } catch (error: any) {
    sendError(res, error, 'Turn off reminders');
  }
};
