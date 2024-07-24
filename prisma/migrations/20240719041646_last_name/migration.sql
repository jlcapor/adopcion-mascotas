/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `shelters` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "shelters" ADD COLUMN     "country_id" INTEGER,
ADD COLUMN     "region_id" INTEGER,
ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "email" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "shelters_name_key" ON "shelters"("name");

-- AddForeignKey
ALTER TABLE "shelters" ADD CONSTRAINT "shelters_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shelters" ADD CONSTRAINT "shelters_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
