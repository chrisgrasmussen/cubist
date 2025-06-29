import { betterAuth } from 'better-auth';
import { db } from './db';
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from '../schema/auth-schema';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false
  },
});