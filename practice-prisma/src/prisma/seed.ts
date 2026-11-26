import { db } from "./db.ts";

const users = [
  { email: "alice@prisma.io", username: "alice", nameB: "Alice" },
  { email: "bob@prisma.io", username: "bob", nameB: "Bob" },
  { email: "carol@prisma.io", username: "carol", nameB: "Carol" },
];

let pendingSeed: Promise<void> | undefined;

async function runSeed(): Promise<void> {
  for (const user of users) {
    await db.orm.public.User.upsert({
      create: {
        email: user.email,
        username: user.username,
        nameB: user.nameB,
      },
      update: {
        nameB: user.nameB,
      },
      conflictOn: { email: user.email },
    });
  }
}

export function seed(): Promise<void> {
  pendingSeed ??= runSeed().catch((error: unknown) => {
    pendingSeed = undefined;
    throw error;
  });
  return pendingSeed;
}
