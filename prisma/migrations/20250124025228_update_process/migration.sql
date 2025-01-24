/*
  Warnings:

  - You are about to drop the column `processType` on the `Process` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Process" DROP COLUMN "processType",
ALTER COLUMN "updatedAt" DROP NOT NULL;
