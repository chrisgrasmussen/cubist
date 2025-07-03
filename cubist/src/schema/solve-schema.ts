import { pgTable, serial, boolean, integer, timestamp, doublePrecision } from 'drizzle-orm/pg-core';
import {user, session} from './auth-schema';

export const solves = pgTable('solves', {
  id: serial('id').primaryKey(),
  
  userId: integer('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),

  // Foreign key to sessions table
  sessionId: integer('session_id')
    .notNull()
    .references(() => session.id, { onDelete: 'cascade' }),

  // Solve time in seconds (e.g., 13.42)
  time: doublePrecision('time').notNull(),

  // DNF flag (did not finish)
  dnf: boolean('dnf').default(false).notNull(),

  // Timestamp of when the solve was logged
  solvedAt: timestamp('created_at').defaultNow().notNull(),
});
