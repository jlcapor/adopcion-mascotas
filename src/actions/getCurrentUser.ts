import { getServerSession } from "next-auth/next"

import { db } from "@/server/db";
import { authOptions } from "@/server/auth";


export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await db.user.findUnique({
      where: {
        email: session.user.email as string,
      }
    });

    if (!currentUser) {
      return null;
    }

    return {
      id: currentUser.id,
      name: currentUser.name,
      email: currentUser.email,
      image: currentUser.image,
      role: currentUser.role
    };
  } catch (error: any) {
    return null;
  }
}

