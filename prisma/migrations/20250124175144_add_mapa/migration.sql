/*
  Warnings:

  - Added the required column `mapaId` to the `Process` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Process" ADD COLUMN     "mapaId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Mapa" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,

    CONSTRAINT "Mapa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Process" ADD CONSTRAINT "Process_mapaId_fkey" FOREIGN KEY ("mapaId") REFERENCES "Mapa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
