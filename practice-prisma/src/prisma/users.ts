import { CreatedAt } from "alchemy/Schema";
import { db } from "./db.ts";
import { seed } from "./seed.ts";

export { db };

export async function listUsers(limit = 10) {
  await seed();
  const users = await db.orm.public.User.select("id", "email", "username", "name", "createdAt").limit(limit).all();

  return users.map((user) => ({
    id: String(user.id),
    email: user.email,
    username: user.username ?? null,
    name: user.name ?? null,
    createdAt: user.createdAt?.toISOString() ?? null,
  }));
}

export async function findByEmail(email: string) {
  await seed();
  const user = await db.orm.public.User
    .select("id", "email", "username", "name", "createdAt")
    .whereUnique({ email: email })
    .first();

  if (!user) {
    return null;
  }
  
  return {
    id: String(user.id),
    email: user.email,
    username: user.username ?? null,
    name: user.name ?? null,
    createdAt: user.createdAt?.toISOString() ?? null,
  };
}

export type StarterUser = Awaited<ReturnType<typeof listUsers>>[number];
