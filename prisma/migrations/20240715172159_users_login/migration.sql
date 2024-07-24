/*
  Warnings:

  - You are about to drop the column `shelter_email` on the `shelters` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `shelterId` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_createdById_fkey";

-- DropForeignKey
ALTER TABLE "adopters" DROP CONSTRAINT "adopters_country_id_fkey";

-- DropForeignKey
ALTER TABLE "adopters" DROP CONSTRAINT "adopters_userId_fkey";

-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "shelterId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "shelters" DROP COLUMN "shelter_email";

-- DropTable
DROP TABLE "Post";

-- AddForeignKey
ALTER TABLE "adopters" ADD CONSTRAINT "adopters_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adopters" ADD CONSTRAINT "adopters_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "shelters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
