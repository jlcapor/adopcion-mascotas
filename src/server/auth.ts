import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import bcrypt from "bcrypt"
import { USER_ROLE } from "@prisma/client";



declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: USER_ROLE;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  interface User {
    // ...other properties
    // role: UserRole;
    id: string;
    role: USER_ROLE;
  }
}


export const authOptions: NextAuthOptions = {
  
  
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { 
          label: "email", 
          type: "email"
      },
      password: { 
          label: 'password', 
          type: 'password' 
      }
      },
      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          throw new Error('Correo electrónico o contraseña incorrectos');
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user || !user?.password) {
          throw new Error('Correo electrónico o contraseña incorrectos');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isCorrectPassword) {
          throw new Error('Correo electrónico o contraseña incorrectos');
        }

        return user
      }
    })
  ],
  callbacks: {
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as USER_ROLE;
      }
      return session;
    },
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id as string;
        token.role = user.role as USER_ROLE;
      }
      return token;
    },
  }, 
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export const getServerAuthSession = () => getServerSession(authOptions);