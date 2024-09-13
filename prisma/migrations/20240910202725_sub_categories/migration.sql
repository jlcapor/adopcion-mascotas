/*
  Warnings:

  - You are about to drop the column `images` on the `pets` table. All the data in the column will be lost.
  - Made the column `countryId` on table `regions` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "regions" DROP CONSTRAINT "regions_countryId_fkey";

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "category_pet_types" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "images" ADD COLUMN     "petId" TEXT;

-- AlterTable
ALTER TABLE "petTypes" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "pet_type_subcategories" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "images";

-- AlterTable
ALTER TABLE "regions" ALTER COLUMN "countryId" SET NOT NULL;

-- AlterTable
ALTER TABLE "subCategories" ADD COLUMN     "imageUrl" TEXT;

-- AddForeignKey
ALTER TABLE "regions" ADD CONSTRAINT "regions_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE SET NULL ON UPDATE CASCADE;
