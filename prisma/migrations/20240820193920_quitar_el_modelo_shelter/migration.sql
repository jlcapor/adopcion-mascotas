/*
  Warnings:

  - You are about to drop the column `adopted` on the `pets` table. All the data in the column will be lost.
  - You are about to drop the column `shelterId` on the `pets` table. All the data in the column will be lost.
  - You are about to drop the `shelters` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_shelterId_fkey";

-- DropForeignKey
ALTER TABLE "shelters" DROP CONSTRAINT "shelters_country_id_fkey";

-- DropForeignKey
ALTER TABLE "shelters" DROP CONSTRAINT "shelters_province_id_fkey";

-- DropForeignKey
ALTER TABLE "shelters" DROP CONSTRAINT "shelters_userId_fkey";

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "adopted",
DROP COLUMN "shelterId";

-- DropTable
DROP TABLE "shelters";
