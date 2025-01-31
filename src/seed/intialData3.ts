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
      ownerid: "cm6jottl80002cm40m1uohpjh",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    },
    {
      code: "PE02-PRONABEC",
      name: "Gestión de la mejora continua institucional",
      description: "Gestión de la mejora continua institucional",
      level: "0",
      state: "s1_pendiente",
      type: "strategy",
      ownerid: "cm6jottl80002cm40m1uohpjh",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    },
    {
      code: "PE03-PRONABEC",
      name: "Gestión de estrategias de comunicación, cooperación y relaciones internacionales",
      description: "Gestión de estrategias de comunicación, cooperación y relaciones internacionales",
      level: "0",
      state: "s1_pendiente",
      type: "strategy",
      ownerid: "cm6jottl80005cm408tepuq5d",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    },
    {
      code: "PE04-PRONABEC",
      name: "Gestión de control y riesgos",
      description: "Gestión de control y riesgos",
      level: "0",
      state: "s1_pendiente",
      type: "strategy",
      ownerid: "cm6jottl80002cm40m1uohpjh",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    },
    {
      code: "PO01-PRONABEC",
      name: "Diseño y actualización de instrumentos para la gestión del beneficio",
      description: "Diseño y actualización de instrumentos para la gestión del beneficio",
      level: "0",
      state: "s1_pendiente",
      type: "operative",
      ownerid: "cm6jottl80008cm40vs9v9ncl",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    },
    {
      code: "PO02-PRONABEC",
      name: "Gestión del otorgamiento del beneficio",
      description: "Gestión del otorgamiento del beneficio",
      level: "0",
      state: "s1_pendiente",
      type: "operative",
      ownerid: "cm6jottl80008cm40vs9v9ncl",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    },
    {
      code: "PO03-PRONABEC",
      name: "Gestión de la continuidad del beneficio",
      description: "Gestión de la continuidad del beneficio",
      level: "0",
      state: "s1_pendiente",
      type: "operative",
      ownerid: "cm6jottl80008cm40vs9v9ncl",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    },
    {
      code: "PO04-PRONABEC",
      name: "Gestión de la recuperación del beneficio",
      description: "Gestión de la recuperación del beneficio",
      level: "0",
      state: "s1_pendiente",
      type: "operative",
      ownerid: "cm6jottl80008cm40vs9v9ncl",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    },
    {
      code: "PS01-PRONABEC",
      name: "Gestión de recursos humanos",
      description: "Gestión de recursos humanos",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6jottl80006cm40uag3a8xk",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    },
    {
      code: "PS02-PRONABEC",
      name: "Administración de recursos financieros",
      description: "Administración de recursos financieros",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6jottl80004cm40311t1kyt",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    },
    {
      code: "PS03-PRONABEC",
      name: "Gestión de abastecimiento",
      description: "Gestión de abastecimiento",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6jottl80004cm40311t1kyt",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    },
    {
      code: "PS04-PRONABEC",
      name: "Gestión de tecnologías de la información y comunicación",
      description: "Gestión de tecnologías de la información y comunicación",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6jottl80003cm40d3q5umyz",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    },
    {
      code: "PS05-PRONABEC",
      name: "Atención de asuntos jurídicos",
      description: "Atención de asuntos jurídicos",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6jottl80001cm40stiphvlq",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    },
    {
      code: "PS06-PRONABEC",
      name: "Atención al ciudadano y administración del archivo",
      description: "Atención al ciudadano y administración del archivo",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6jottl80007cm40d1qezomg",
      mapaId: "cm6jlr8nk0003cmnc9sixoe0x",
      managerId: "cm6joo9kz0000cmrwl2r7vi3x"
    }
  ]
};


