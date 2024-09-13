/*
  Warnings:

  - You are about to drop the column `ageDescription` on the `pets` table. All the data in the column will be lost.
  - Made the column `sizeId` on table `pets` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `stock` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_sizeId_fkey";

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "ageDescription",
ALTER COLUMN "sizeId" SET NOT NULL;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "stock" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "products_name_idx" ON "products"("name");

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "sizes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
