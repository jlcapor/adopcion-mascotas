/*
  Warnings:

  - You are about to drop the column `region_id` on the `cities` table. All the data in the column will be lost.
  - You are about to drop the column `region_id` on the `shelters` table. All the data in the column will be lost.
  - Added the required column `province_id` to the `cities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cities" DROP CONSTRAINT "cities_region_id_fkey";

-- DropForeignKey
ALTER TABLE "shelters" DROP CONSTRAINT "shelters_region_id_fkey";

-- AlterTable
ALTER TABLE "cities" DROP COLUMN "region_id",
ADD COLUMN     "province_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "shelters" DROP COLUMN "region_id",
ADD COLUMN     "province_id" INTEGER;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shelters" ADD CONSTRAINT "shelters_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "regions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
