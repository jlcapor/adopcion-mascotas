import "server-only"

import { db } from "@/server/db";

export const getShelterByUserId = async (userId: string) => {
    try {
        const shelter = await db.shelter.findFirst({
            where: {
                userId
            }
        })
        if (!shelter) return null;
        return shelter;  
    } catch (error: any) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
};


export const getShelterById = async (shelterId: string) => {
    try {
        const shelter = await db.shelter.findUnique({
            where: {
                id: shelterId
            },
        })
        
        return shelter;
    } catch (error: any) {
        throw new Error(error.message);
    }
};


