/*
  Warnings:

  - You are about to drop the column `image` on the `pets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pets" DROP COLUMN "image",
ADD COLUMN     "images" JSONB,
ALTER COLUMN "age" DROP NOT NULL;
