/*
  Warnings:

  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `adopters` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "adopters" DROP CONSTRAINT "adopters_country_id_fkey";

-- DropForeignKey
ALTER TABLE "adopters" DROP CONSTRAINT "adopters_region_id_fkey";

-- DropForeignKey
ALTER TABLE "adopters" DROP CONSTRAINT "adopters_userId_fkey";

-- AlterTable
ALTER TABLE "shelters" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "contactEmail" TEXT,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- DropTable
DROP TABLE "adopters";
