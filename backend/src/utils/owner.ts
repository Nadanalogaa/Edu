import { query } from '../config/database';
import { createUser, findUserByEmail } from '../models/User';

/**
 * Creates the platform owner's login from OWNER_EMAIL / OWNER_PASSWORD (set in
 * the Portainer stack) when no owner exists yet. Never changes an existing user.
 */
export const ensureOwner = async () => {
  const email = process.env.OWNER_EMAIL;
  const password = process.env.OWNER_PASSWORD;
  if (!email || !password) return;

  const [existingOwner] = await query("SELECT id FROM users WHERE role = 'owner' LIMIT 1");
  if (existingOwner) return;

  if (await findUserByEmail(email)) {
    console.warn(`OWNER_EMAIL ${email} already belongs to another account; owner login not created`);
    return;
  }

  await createUser({ name: process.env.OWNER_NAME || 'Owner', email, password, role: 'owner', isActive: true });
  console.log(`Owner login created for ${email}`);
};
