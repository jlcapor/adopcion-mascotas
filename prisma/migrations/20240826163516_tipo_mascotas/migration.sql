/*
  Warnings:

  - You are about to drop the `petTypesCategories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `petTypeId` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "petTypesCategories" DROP CONSTRAINT "petTypesCategories_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "petTypesCategories" DROP CONSTRAINT "petTypesCategories_petTypeId_fkey";

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "petTypeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "petTypesCategories";

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_petTypeId_fkey" FOREIGN KEY ("petTypeId") REFERENCES "petTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
