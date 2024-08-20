
"use server";
import { db } from "@/server/db";
import { revalidatePath, revalidateTag } from "next/cache";

export async function updateShelterImage(input:{shelterId: string, imageUrl: string}) {
    try {
      const shelterImage = await db.shelter.update({
        where: {
            id: input.shelterId
        },
        data: {
            image: input.imageUrl
        },
      });
  
      return { status: "success" };
    } catch (error) {
      // console.log(error)
      return { status: "error" };
    }
  }

  export async function createStore(
    input: CreateStoreSchema & { userId: string }
  ) {
    
    try {
     
      revalidateTag(`shelter-${input.userId}`)
  
      return {
        
        error: null,
      }
    } catch (err) {
      return {
        data: null,
        error: getErrorMessage(err),
      }
    }
  }

// shelterName: shelter?.name || "",
// 		address: shelter?.address,
// 		neighborhood: shelter.neighborhood || "",
// 		telephone: shelter?.telephone,
// 		provinceId: shelter.provinceId,
// 		cityId: shelter.cityId,
// 		description: shelter?.description || "",

