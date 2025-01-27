-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'admin');

-- CreateEnum
CREATE TYPE "State" AS ENUM ('s1_pendiente', 's2_elaborandose', 's3_elaborando', 's4_validandose', 's5_validando', 's6_aprobandoseOficina', 's7_aprobandoOoficina', 's8_validandoseUNOME', 's9_validadoUNOME', 's10_aprobandosePRONABEC', 's11_aprobandoPRONABEC');

-- CreateEnum
CREATE TYPE "TypeProcess" AS ENUM ('strategy', 'operative', 'support');

-- CreateEnum
CREATE TYPE "UnidadFuncional" AS ENUM ('Dirección Ejecutiva', 'Dirección de Coordinación Nac. y Cooperación Internacional', 'Dirección de Gestión de Becas', 'Subdirección de Evaluación y Selección', 'Subdirección de Seguimiento y Supervisión', 'Dirección de Gestión de Crédito Educativo', 'Subdirección de Evaluación y Otorgamiento', 'Subdirección de Seguimiento y Cumplimiento', 'Dirección de Acompañamiento Socioemocional y Bienestar', 'Oficina de Asesoría Jurídica', 'Oficina de Planeamiento y Presupuesto', 'Unidad de Modernización de La Gestión', 'Unidad de Estudios Sociales e Investigación', 'Unidad de Planeamiento', 'Unidad de Presupuesto', 'Oficina de Tecnologías de la Información', 'Oficina de Gestión de Recursos Humanos', 'Oficina de Atención a la Ciudadanía y Gestión Documental', 'Oficina de Comunicaciones y Relaciones Institucionales', 'Oficina de Administración y Finanzas', 'Unidad de Abastecimiento', 'Unidad de Contabilidad y Control Previo', 'Unidad de Subvenciones y Financiamiento', 'Unidad de Tesorería');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "role" "Role" NOT NULL DEFAULT 'user',
    "email_verified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("provider","providerAccountId")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Owner" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "unidadFuncional" "UnidadFuncional",

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Process" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "type" "TypeProcess" NOT NULL,
    "state" "State" NOT NULL DEFAULT 's1_pendiente',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "OwnerId" TEXT NOT NULL,
    "managerId" TEXT,
    "mapaId" TEXT,

    CONSTRAINT "Process_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mapa" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,

    CONSTRAINT "Mapa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_sons" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_sons_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_key" ON "verification_tokens"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "Manager_userId_key" ON "Manager"("userId");

-- CreateIndex
CREATE INDEX "_sons_B_index" ON "_sons"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manager" ADD CONSTRAINT "Manager_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Process" ADD CONSTRAINT "Process_OwnerId_fkey" FOREIGN KEY ("OwnerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Process" ADD CONSTRAINT "Process_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Process" ADD CONSTRAINT "Process_mapaId_fkey" FOREIGN KEY ("mapaId") REFERENCES "Mapa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_sons" ADD CONSTRAINT "_sons_A_fkey" FOREIGN KEY ("A") REFERENCES "Process"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_sons" ADD CONSTRAINT "_sons_B_fkey" FOREIGN KEY ("B") REFERENCES "Process"("id") ON DELETE CASCADE ON UPDATE CASCADE;
