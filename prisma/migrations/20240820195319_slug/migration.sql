/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `petTypes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `petTypes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "petTypes" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "petTypes_slug_key" ON "petTypes"("slug");
