/*
  Warnings:

  - The primary key for the `breeds` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `breeds` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `categories` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `petTypes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `petTypes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `petTypesCategories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `breedId` column on the `pets` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sizeId` column on the `pets` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `subCategoryId` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `sizes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `sizes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `subCategories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `subCategories` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `petTypeId` on the `breeds` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `petTypeId` on the `petTypesCategories` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `categoryId` on the `petTypesCategories` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `petTypeId` on the `pets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `categoryId` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `categoryId` on the `subCategories` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "breeds" DROP CONSTRAINT "breeds_petTypeId_fkey";

-- DropForeignKey
ALTER TABLE "petTypesCategories" DROP CONSTRAINT "petTypesCategories_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "petTypesCategories" DROP CONSTRAINT "petTypesCategories_petTypeId_fkey";

-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_breedId_fkey";

-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_petTypeId_fkey";

-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_sizeId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_subCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "subCategories" DROP CONSTRAINT "subCategories_categoryId_fkey";

-- AlterTable
ALTER TABLE "breeds" DROP CONSTRAINT "breeds_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "petTypeId",
ADD COLUMN     "petTypeId" INTEGER NOT NULL,
ADD CONSTRAINT "breeds_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "categories" DROP CONSTRAINT "categories_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "petTypes" DROP CONSTRAINT "petTypes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "petTypes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "petTypesCategories" DROP CONSTRAINT "petTypesCategories_pkey",
DROP COLUMN "petTypeId",
ADD COLUMN     "petTypeId" INTEGER NOT NULL,
DROP COLUMN "categoryId",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD CONSTRAINT "petTypesCategories_pkey" PRIMARY KEY ("petTypeId", "categoryId");

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "petTypeId",
ADD COLUMN     "petTypeId" INTEGER NOT NULL,
DROP COLUMN "breedId",
ADD COLUMN     "breedId" INTEGER,
DROP COLUMN "sizeId",
ADD COLUMN     "sizeId" INTEGER;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "petTypeId" INTEGER,
ALTER COLUMN "rating" DROP NOT NULL,
DROP COLUMN "categoryId",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
DROP COLUMN "subCategoryId",
ADD COLUMN     "subCategoryId" INTEGER;

-- AlterTable
ALTER TABLE "sizes" DROP CONSTRAINT "sizes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "sizes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "subCategories" DROP CONSTRAINT "subCategories_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "categoryId",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD CONSTRAINT "subCategories_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_petTypeId_fkey" FOREIGN KEY ("petTypeId") REFERENCES "petTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "breeds"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "sizes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "breeds" ADD CONSTRAINT "breeds_petTypeId_fkey" FOREIGN KEY ("petTypeId") REFERENCES "petTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subCategories" ADD CONSTRAINT "subCategories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "subCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_petTypeId_fkey" FOREIGN KEY ("petTypeId") REFERENCES "petTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "petTypesCategories" ADD CONSTRAINT "petTypesCategories_petTypeId_fkey" FOREIGN KEY ("petTypeId") REFERENCES "petTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "petTypesCategories" ADD CONSTRAINT "petTypesCategories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
