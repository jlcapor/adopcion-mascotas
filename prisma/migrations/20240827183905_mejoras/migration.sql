/*
  Warnings:

  - You are about to drop the column `petTypeId` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `petTypeId` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_petTypeId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_petTypeId_fkey";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "petTypeId";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "petTypeId";

-- CreateTable
CREATE TABLE "category_pet_types" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "petTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pet_types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "category_pet_types_categoryId_idx" ON "category_pet_types"("categoryId");

-- CreateIndex
CREATE INDEX "category_pet_types_petTypeId_idx" ON "category_pet_types"("petTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "category_pet_types_categoryId_petTypeId_key" ON "category_pet_types"("categoryId", "petTypeId");

-- AddForeignKey
ALTER TABLE "category_pet_types" ADD CONSTRAINT "category_pet_types_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_pet_types" ADD CONSTRAINT "category_pet_types_petTypeId_fkey" FOREIGN KEY ("petTypeId") REFERENCES "petTypes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
