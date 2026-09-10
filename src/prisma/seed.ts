import { connectDatabase, db } from "./db.ts";
import { hashPassword } from "../lib/auth";

const users = [
  { name: "Alice", email: "alice@prisma.io", password: "password123", role: "client" as const },
  { name: "Bob", email: "bob@prisma.io", password: "password123", role: "freelancer" as const },
];

let pending: Promise<void> | undefined;
export function seed() {
  pending ??= (async () => {
    await connectDatabase();
    for (const u of users) {
      await db.orm.public.User.upsert({ create: { ...u, password: await hashPassword(u.password) }, update: {}, conflictOn: { email: u.email } });
    }
  })();
  return pending;
}
