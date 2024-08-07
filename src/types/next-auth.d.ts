import { USER_ROLE } from "@prisma/client";
import { User } from "next-auth";
import { JWT } from "next-auth/jwt";

export type ExtendedUser = User & {
  id: string;
  role: USER_ROLE;
};

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: USER_ROLE;
  }
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}