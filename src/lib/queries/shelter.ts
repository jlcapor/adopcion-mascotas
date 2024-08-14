import "server-only"
import {
    unstable_cache as cache,
  } from "next/cache"
import { db } from "@/server/db";

export const getShelterByUserId = async (input: { userId: string }) => {
    try {
        const shelter = await db.shelter.findFirst({
            where: {
                userId: input.userId
            },
            select: {
                id: true,
                name: true,         
                address: true,      
                neighborhood: true,
                telephone: true,    
                provinceId: true,    
                cityId: true,    
                description: true,
                userId: true,
            }
        })
        
        return shelter
    } catch (err: unknown) {
        const e = err as unknown as Error;
        console.error(e.stack);
        throw e.message;
    }
};


export async function getSheltersByUserId(input: { userId: string }) {
    return await cache(
        async () => {
            const shelters = await db.shelter.findMany({
                where: {
                    userId: input.userId
                },
                select: {
                    id: true,
                    name: true,
                    address: true,
                    neighborhood: true,
                    telephone: true,
                    provinceId: true,
                    cityId: true,
                    description: true,
                }
            })
            return shelters;
        },
        [`shelters-${input.userId}`],
        {
            revalidate: 900,
            tags: [`shelters-${input.userId}`],
        }
    )()
}


export const getShelterById = async (shelterId: string) => {
    try {
        const shelter = await db.shelter.findUniqueOrThrow({
            where: {
                id: shelterId
            },
        })
        
        return shelter;
    } catch (err: unknown) {
        const e = err as unknown as Error;
        console.error(e.stack);
        throw e.message;
    }
};


//https://medium.com/@sajankumarvijayan/how-to-build-an-application-using-next-js-and-prisma-orm-8f73f1f59a82
//https://blog.stackademic.com/how-caching-works-in-next-js-f04856e7f9a7




//https://medium.com/@sajankumarvijayan/how-to-build-an-application-using-next-js-and-prisma-orm-8f73f1f59a82
//https://blog.stackademic.com/how-caching-works-in-next-js-f04856e7f9a7



// return shelters.length > 0 ? shelters : null;  