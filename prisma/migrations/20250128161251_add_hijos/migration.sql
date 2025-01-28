/*
  Warnings:

  - You are about to drop the `_sons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_sons" DROP CONSTRAINT "_sons_A_fkey";

-- DropForeignKey
ALTER TABLE "_sons" DROP CONSTRAINT "_sons_B_fkey";

-- AlterTable
ALTER TABLE "Process" ADD COLUMN     "hijos" TEXT[];

-- DropTable
DROP TABLE "_sons";
