/*
  Warnings:

  - You are about to drop the column `OwnerId` on the `Process` table. All the data in the column will be lost.
  - Added the required column `ownerid` to the `Process` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Process" DROP CONSTRAINT "Process_OwnerId_fkey";

-- AlterTable
ALTER TABLE "Process" DROP COLUMN "OwnerId",
ADD COLUMN     "ownerid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Process" ADD CONSTRAINT "Process_ownerid_fkey" FOREIGN KEY ("ownerid") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
