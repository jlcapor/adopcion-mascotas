/*
  Warnings:

  - You are about to drop the column `contactEmail` on the `shelters` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "shelters_name_key";

-- DropIndex
DROP INDEX "shelters_userId_key";

-- AlterTable
ALTER TABLE "shelters" DROP COLUMN "contactEmail",
ALTER COLUMN "active" SET DEFAULT false;
