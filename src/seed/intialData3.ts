import { State, TypeProcess, UnidadFuncional } from '@prisma/client';
import bcrypt from 'bcryptjs';


interface SeedProcess {
  code: string;
  name: string;
  description: string;
  level: string;
  state: State
  type: TypeProcess;
  ownerid: string
  mapaId: string;
  managerId: string;

}





interface SeedData {
  process: SeedProcess[];
}

export const incialData: SeedData = {

  process: [
    {
      code: "PE01-PRONABEC",
      name: "Planificación estratégica",
      description: "Planificación estratégica",
      level: "0",
      state: "s1_pendiente",
      type: "strategy",
      ownerid: "cm6ktz64z0002ht28q002wt44",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    },
    {
      code: "PE02-PRONABEC",
      name: "Gestión de la mejora continua institucional",
      description: "Gestión de la mejora continua institucional",
      level: "0",
      state: "s1_pendiente",
      type: "strategy",
      ownerid: "cm6ktz64z0002ht28q002wt44",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    },
    {
      code: "PE03-PRONABEC",
      name: "Gestión de estrategias de comunicación, cooperación y relaciones internacionales",
      description: "Gestión de estrategias de comunicación, cooperación y relaciones internacionales",
      level: "0",
      state: "s1_pendiente",
      type: "strategy",
      ownerid: "cm6ktz64z0007ht28bwdw19zy",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    },
    {
      code: "PE04-PRONABEC",
      name: "Gestión de control y riesgos",
      description: "Gestión de control y riesgos",
      level: "0",
      state: "s1_pendiente",
      type: "strategy",
      ownerid: "cm6ktz64z0002ht28q002wt44",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    },
    {
      code: "PO01-PRONABEC",
      name: "Diseño y actualización de instrumentos para la gestión del beneficio",
      description: "Diseño y actualización de instrumentos para la gestión del beneficio",
      level: "0",
      state: "s1_pendiente",
      type: "operative",
      ownerid: "cm6ktz64z0008ht287mi29bsw",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    },
    {
      code: "PO02-PRONABEC",
      name: "Gestión del otorgamiento del beneficio",
      description: "Gestión del otorgamiento del beneficio",
      level: "0",
      state: "s1_pendiente",
      type: "operative",
      ownerid: "cm6ktz64z0008ht287mi29bsw",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    },
    {
      code: "PO03-PRONABEC",
      name: "Gestión de la continuidad del beneficio",
      description: "Gestión de la continuidad del beneficio",
      level: "0",
      state: "s1_pendiente",
      type: "operative",
      ownerid: "cm6ktz64z0008ht287mi29bsw",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    },
    {
      code: "PO04-PRONABEC",
      name: "Gestión de la recuperación del beneficio",
      description: "Gestión de la recuperación del beneficio",
      level: "0",
      state: "s1_pendiente",
      type: "operative",
      ownerid: "cm6ktz64z0008ht287mi29bsw",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    },
    {
      code: "PS01-PRONABEC",
      name: "Gestión de recursos humanos",
      description: "Gestión de recursos humanos",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6ktz64z0006ht28agfs61hr",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    },
    {
      code: "PS02-PRONABEC",
      name: "Administración de recursos financieros",
      description: "Administración de recursos financieros",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6ktz64z0004ht28shbbdy5x",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    },
    {
      code: "PS03-PRONABEC",
      name: "Gestión de abastecimiento",
      description: "Gestión de abastecimiento",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6ktz64z0004ht28shbbdy5x",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    },
    {
      code: "PS04-PRONABEC",
      name: "Gestión de tecnologías de la información y comunicación",
      description: "Gestión de tecnologías de la información y comunicación",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6ktz64z0003ht28odpa3rja",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    },
    {
      code: "PS05-PRONABEC",
      name: "Atención de asuntos jurídicos",
      description: "Atención de asuntos jurídicos",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6ktz64z0001ht281x9b7rnv",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    },
    {
      code: "PS06-PRONABEC",
      name: "Atención al ciudadano y administración del archivo",
      description: "Atención al ciudadano y administración del archivo",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6ktz64z0007ht28bwdw19zy",
      mapaId: "cm6ktl40e0003htokiq2nndln",
      managerId: "cm6ktz66m000cht28evr1ct0n"
    }
  ]
};


