"use server";

import { db } from "@/server/db";
import { loginSchema, LoginSchema } from "../validations/auth";
import bcrypt from 'bcrypt';
import { string } from "zod";

export interface ActionResponse<T> {
    fieldError?: Partial<Record<keyof T, string | undefined>>;
    formError?: string;
  }

