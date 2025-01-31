/*
  Warnings:

  - The values [s5_validando,s7_aprobandoOoficina] on the enum `State` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `unidadFuncional` on the `Owner` table. All the data in the column will be lost.
  - Added the required column `unidadFuncionalId` to the `Owner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "State_new" AS ENUM ('s1_pendiente', 's2_elaborandose', 's3_elaborando', 's4_validandose', 's5_validado', 's6_aprobandoseOficina', 's7_aprobadoOficina', 's8_validandoseUNOME', 's9_validadoUNOME', 's10_aprobandosePRONABEC', 's11_aprobandoPRONABEC');
ALTER TABLE "Process" ALTER COLUMN "state" DROP DEFAULT;
ALTER TABLE "Process" ALTER COLUMN "state" TYPE "State_new" USING ("state"::text::"State_new");
ALTER TYPE "State" RENAME TO "State_old";
ALTER TYPE "State_new" RENAME TO "State";
DROP TYPE "State_old";
ALTER TABLE "Process" ALTER COLUMN "state" SET DEFAULT 's1_pendiente';
COMMIT;

-- AlterTable
ALTER TABLE "Owner" DROP COLUMN "unidadFuncional",
ADD COLUMN     "unidadFuncionalId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "UnidadFuncional";

-- CreateTable
CREATE TABLE "UnidadFuncional" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "UnidadFuncional_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Owner" ADD CONSTRAINT "Owner_unidadFuncionalId_fkey" FOREIGN KEY ("unidadFuncionalId") REFERENCES "UnidadFuncional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
