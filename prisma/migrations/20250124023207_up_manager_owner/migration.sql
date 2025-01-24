/*
  Warnings:

  - You are about to drop the column `name` on the `Manager` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Owner` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Manager" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Owner" DROP COLUMN "name";
