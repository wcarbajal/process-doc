/*
  Warnings:

  - You are about to drop the column `nombre` on the `Manager` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `codigo` on the `Process` table. All the data in the column will be lost.
  - You are about to drop the column `nivel` on the `Process` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Process` table. All the data in the column will be lost.
  - Added the required column `name` to the `Manager` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Process` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Process` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Process` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Process` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Process` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Process` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypeProcess" AS ENUM ('strategy', 'operative', 'support');

-- AlterTable
ALTER TABLE "Manager" DROP COLUMN "nombre",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Owner" DROP COLUMN "nombre",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Process" DROP COLUMN "codigo",
DROP COLUMN "nivel",
DROP COLUMN "nombre",
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "level" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "type" "TypeProcess" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
