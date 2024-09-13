/*
  Warnings:

  - You are about to drop the column `quantity` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "quantity",
ALTER COLUMN "stock" SET DEFAULT 1;
