-- DropForeignKey
ALTER TABLE "Process" DROP CONSTRAINT "Process_mapaId_fkey";

-- AlterTable
ALTER TABLE "Process" ALTER COLUMN "mapaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Process" ADD CONSTRAINT "Process_mapaId_fkey" FOREIGN KEY ("mapaId") REFERENCES "Mapa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
