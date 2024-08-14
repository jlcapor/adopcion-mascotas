
import { db } from "@/server/db";
import { updateShelterSchema } from "../validations/shelter";
export async function createShelter(fd: FormData){
    try {
        const input = updateShelterSchema.parse({
           name: fd.get("shelterName"),
           address: fd.get("address"),
           neighborhood: fd.get("neighborhood"),
           telephone: fd.get("telephone"),
           provinceId: fd.get("provinceId"),
           cityId: fd.get("cityId"),
           image: fd.get("image")
        })

        const shelterExists = await db.shelter.findFirst({
            where: {
               name: input.shelterName
            }
        })
        if(shelterExists) {
            throw new Error( "Shelter already exists")
        }

        const shelter = await db.shelter.create({
            data: {
                name: input.shelterName,
                address: input.address,
                neighborhood: input.neighborhood,
                telephone: input.telephone,
                provinceId: input.provinceId,
                cityId: input.cityId,
                image: input.image,
                userId: '' 
            }
        })
        return {
            success: false,
            message: "Shelter created successfully",
        }

    } catch (error) {
        return {
            success: true,
        }
    }
}

export async function getCategories() {
    
}



// shelterName: shelter?.name || "",
// 		address: shelter?.address,
// 		neighborhood: shelter.neighborhood || "",
// 		telephone: shelter?.telephone,
// 		provinceId: shelter.provinceId,
// 		cityId: shelter.cityId,
// 		description: shelter?.description || "",

