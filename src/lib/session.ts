'use server'
import "server-only";
import { cache } from "react";
import { authOptions } from "@/server/auth"
import { getServerSession } from "next-auth/next"

export async function getSession() {
  return await getServerSession(authOptions)
}

export const getCurrentUser = cache(async () => {
  const session = await getSession()
  if (!session?.user) {
    return undefined;
  }
  return session?.user
});