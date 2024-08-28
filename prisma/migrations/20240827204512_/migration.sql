-- AlterTable
ALTER TABLE "products" ADD COLUMN     "petTypeId" INTEGER;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_petTypeId_fkey" FOREIGN KEY ("petTypeId") REFERENCES "petTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
