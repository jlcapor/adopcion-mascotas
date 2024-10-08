/*
  Warnings:

  - The values [AVAILABLE,OUT_OF_STOCK,DISCONTINUED] on the enum `PRODUCT_STATUS` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PRODUCT_STATUS_new" AS ENUM ('DISPONIBLE', 'AGOTADO', 'DESCONTINUADO');
ALTER TABLE "products" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "products" ALTER COLUMN "status" TYPE "PRODUCT_STATUS_new" USING ("status"::text::"PRODUCT_STATUS_new");
ALTER TYPE "PRODUCT_STATUS" RENAME TO "PRODUCT_STATUS_old";
ALTER TYPE "PRODUCT_STATUS_new" RENAME TO "PRODUCT_STATUS";
DROP TYPE "PRODUCT_STATUS_old";
ALTER TABLE "products" ALTER COLUMN "status" SET DEFAULT 'DISPONIBLE';
COMMIT;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "status" SET DEFAULT 'DISPONIBLE';
