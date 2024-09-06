/*
  Warnings:

  - You are about to drop the `PetTypeSubcategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PetTypeSubcategories" DROP CONSTRAINT "PetTypeSubcategories_petTypeId_fkey";

-- DropForeignKey
ALTER TABLE "PetTypeSubcategories" DROP CONSTRAINT "PetTypeSubcategories_subCategoryId_fkey";

-- DropTable
DROP TABLE "PetTypeSubcategories";

-- CreateTable
CREATE TABLE "pet_type_subcategories" (
    "id" SERIAL NOT NULL,
    "petTypeId" INTEGER NOT NULL,
    "subCategoryId" INTEGER NOT NULL,

    CONSTRAINT "pet_type_subcategories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "pet_type_subcategories_petTypeId_idx" ON "pet_type_subcategories"("petTypeId");

-- CreateIndex
CREATE INDEX "pet_type_subcategories_subCategoryId_idx" ON "pet_type_subcategories"("subCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "pet_type_subcategories_petTypeId_subCategoryId_key" ON "pet_type_subcategories"("petTypeId", "subCategoryId");

-- AddForeignKey
ALTER TABLE "pet_type_subcategories" ADD CONSTRAINT "pet_type_subcategories_petTypeId_fkey" FOREIGN KEY ("petTypeId") REFERENCES "petTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pet_type_subcategories" ADD CONSTRAINT "pet_type_subcategories_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "subCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
