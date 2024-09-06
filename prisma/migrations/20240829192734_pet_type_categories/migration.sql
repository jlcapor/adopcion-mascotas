-- AlterTable
ALTER TABLE "products" ALTER COLUMN "images" SET DATA TYPE JSON;

-- CreateTable
CREATE TABLE "PetTypeSubcategories" (
    "id" SERIAL NOT NULL,
    "petTypeId" INTEGER NOT NULL,
    "subCategoryId" INTEGER NOT NULL,

    CONSTRAINT "PetTypeSubcategories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PetTypeSubcategories_petTypeId_idx" ON "PetTypeSubcategories"("petTypeId");

-- CreateIndex
CREATE INDEX "PetTypeSubcategories_subCategoryId_idx" ON "PetTypeSubcategories"("subCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "PetTypeSubcategories_petTypeId_subCategoryId_key" ON "PetTypeSubcategories"("petTypeId", "subCategoryId");

-- AddForeignKey
ALTER TABLE "PetTypeSubcategories" ADD CONSTRAINT "PetTypeSubcategories_petTypeId_fkey" FOREIGN KEY ("petTypeId") REFERENCES "petTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PetTypeSubcategories" ADD CONSTRAINT "PetTypeSubcategories_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "subCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
