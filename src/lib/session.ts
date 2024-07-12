import { getServerAuthSession } from "@/server/auth"

export async function getSession() {
  return await getServerAuthSession();
}

export async function getCurrentUser() {
  const session = await getSession()
  return session
}