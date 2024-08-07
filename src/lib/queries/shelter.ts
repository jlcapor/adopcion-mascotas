import "server-only"

import {
    unstable_noStore as noStore,
} from "next/cache"

import { db } from "@/server/db";

export const getShelterByUserId = async (input: {userId: string}) => {
    noStore()
    try {
        const shelter = await db.shelter.findFirst({
            where: {
                userId: input.userId
            }
        })
        if (!shelter) return null;
        return shelter;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
};