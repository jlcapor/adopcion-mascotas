
import { db } from "@/server/db";
export async function createShelter(){
    try {

        const shelterExists = await db.user.findUnique({
            where: {
                email: "shelter@shelter.com"
            }
        })
        if(shelterExists) {
            throw new Error( "Shelter already exists")
        }
        const shelter = await db.user.create({
            data: {
                name: "Shelter",
                email: "shelter@shelter.com",
                password: "shelter123",
            
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



