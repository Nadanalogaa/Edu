# Deploying Education Intelligence on the OVH server (Portainer)

The setup mirrors Nadanaloga's:

| Stack | File | Containers | Volumes |
|---|---|---|---|
| `edu-db` | `deploy/edu-db-stack.yml` (pasted into the web editor) | `edu-db` (Postgres 15), `edu-db-backup` | `edu-pgdata`, `edu-db-backups` |
| `edu-app` | `docker-compose.portainer.yml` (built from Git) | `edu-app` (frontend + API on port 3000) | `edu-uploads` |

The app reaches the database over `edu-network`, and Nginx Proxy Manager reaches the app over
the proxy network (`nadanaloga-main-network` by default). The database has no published port.
The app creates its tables itself on startup.

## 1. Database stack: `edu-db`

1. Portainer → **Stacks** → **Add stack** → name `edu-db` → **Web editor**.
2. Paste the contents of `deploy/edu-db-stack.yml`.
3. Environment variables:
   - `POSTGRES_PASSWORD`: a new strong password (e.g. `openssl rand -hex 24`). Keep it; the app stack needs the same value.
   - `SMTP_USER`, `SMTP_PASS` (optional): the Brevo credentials already used by Nadanaloga, so each nightly backup is emailed to `BACKUP_EMAIL_TO` (default nadanaloga2026@gmail.com).
4. **Deploy the stack**. `edu-db` should turn healthy within a minute, and the `edu-db-backup` log should show `OK: /backups/education-....dump`.

## 2. App stack: `edu-app`

1. Portainer → **Stacks** → **Add stack** → name `edu-app` → **Repository**.
   - Repository URL: `https://github.com/Nadanalogaa/Edu`
   - Repository reference: `refs/heads/main`
   - Compose path: `docker-compose.portainer.yml`
2. Environment variables:

   | Name | Value |
   |---|---|
   | `POSTGRES_PASSWORD` | same value as in `edu-db` |
   | `JWT_SECRET` | a new random secret (e.g. `openssl rand -hex 32`) |
   | `CLIENT_URL` | `https://edu.nadanaloga.com` |
   | `SEED_DEMO_DATA` | `true` for the first deploy (adds the demo accounts only if the database is empty) |
   | `OWNER_EMAIL` | your own email: the owner login that manages all schools |
   | `OWNER_PASSWORD` | a strong password for it (used only to create the owner the first time) |
   | `PROXY_NETWORK` | only if Nginx Proxy Manager is on a network other than `nadanaloga-main-network` |
   | `GEMINI_API_KEY` | optional, for AI features |

3. **Deploy the stack**. The first build takes a few minutes. The `edu-app` log should end with
   `PostgreSQL connected: education` and `Server is running in production mode on port 3000`.

To ship new code later: push to `main`, then Portainer → `edu-app` → **Pull and redeploy**.

## 3. Domain: Nginx Proxy Manager

1. DNS: add an `A` record `edu` → the OVH server's IP (same IP as nadanaloga.com).
2. Nginx Proxy Manager → **Proxy Hosts** → **Add Proxy Host**:
   - Domain: `edu.nadanaloga.com`
   - Scheme `http`, Forward hostname `edu-app`, port `3000`
   - Turn on **Block Common Exploits** and **Websockets Support**.
   - SSL tab: request a new Let's Encrypt certificate, with **Force SSL** and **HTTP/2** on.
3. Open https://edu.nadanaloga.com and check https://edu.nadanaloga.com/api/health.

## Logins and roles

| Role | What they do |
|---|---|
| Owner | Creates schools with their admin login (or approves self-registered ones), sets each school's board, student limit and subscription end date, manages the syllabus and the shared question bank. Created from `OWNER_EMAIL` / `OWNER_PASSWORD`. |
| School admin | Adds students one by one or imports them from Excel, adds teachers and more school admins, resets passwords, adds the school's own questions, creates tests. Only active students count towards the limit. Signs in with email. |
| Student | Signs in with the **school code + admission number + password** (no email needed). |
| Teacher | Signs in with email. Teachers and students can also register themselves with the school code and sign in after the school admin approves them. |

Database changes are applied automatically when the app starts (see `backend/src/db/migrations.ts`).

## 9th standard demo for showing schools

Owner dashboard → **Set up / reset demo** creates two demo schools with 24 students in 9th A/B,
five weeks of test results and one test open now. All demo passwords are `demo1234`:

| | State Board | CBSE |
|---|---|---|
| School admin | demo.admin.sb@educore.demo | demo.admin.cbse@educore.demo |
| Teacher | demo.teacher.sb@educore.demo | demo.teacher.cbse@educore.demo |
| Student (Student tab) | school code `DEMOSB9`, admission no. `9A01`–`9A12`, `9B01`–`9B12` | school code `DEMOCBSE9`, same numbers |

Pressing the button again resets only the demo schools.

## Demo accounts (when `SEED_DEMO_DATA=true` and the database was empty)

| Role | Email | Password |
|---|---|---|
| Admin | admin@school.com | admin123 |
| Teacher | teacher@school.com | teacher123 |
| Student | school code `TNMS001`, admission no. `S001` (or student@school.com) | student123 |

These passwords are public. Change them, or deactivate the accounts, before real students use the site.

## Restore a backup

```sh
# inside the edu-db-backup container (Portainer → Containers → edu-db-backup → Console)
pg_restore -h edu-db -U edu_user -d education --clean --if-exists --no-owner /backups/education-YYYY-MM-DD_HHMM.dump
```

## Local development

```sh
# backend/.env
DATABASE_URL=postgresql://edu_user:password@localhost:5432/education
SEED_DEMO_DATA=true
```

Then run `npm run dev` in `backend/` and `npm run dev` in the project root.
Running `npm run seed` in `backend/` **erases every table** and re-creates the demo data.
