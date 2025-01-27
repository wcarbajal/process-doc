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
  managerId: string

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
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    },
    {
      code: "PE02-PRONABEC",
      name: "Gestión de la mejora continua institucional",
      description: "Gestión de la mejora continua institucional",
      level: "0",
      state: "s1_pendiente",
      type: "strategy",
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    },
    {
      code: "PE03-PRONABEC",
      name: "Gestión de estrategias de comunicación, cooperación y relaciones internacionales",
      description: "Gestión de estrategias de comunicación, cooperación y relaciones internacionales",
      level: "0",
      state: "s1_pendiente",
      type: "strategy",
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    },
    {
      code: "PE04-PRONABEC",
      name: "Gestión de control y riesgos",
      description: "Gestión de control y riesgos",
      level: "0",
      state: "s1_pendiente",
      type: "strategy",
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    },
    {
      code: "PO01-PRONABEC",
      name: "Diseño y actualización de instrumentos para la gestión del beneficio",
      description: "Diseño y actualización de instrumentos para la gestión del beneficio",
      level: "0",
      state: "s1_pendiente",
      type: "operative",
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    },
    {
      code: "PO02-PRONABEC",
      name: "Gestión del otorgamiento del beneficio",
      description: "Gestión del otorgamiento del beneficio",
      level: "0",
      state: "s1_pendiente",
      type: "operative",
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    },
    {
      code: "PO03-PRONABEC",
      name: "Gestión de la continuidad del beneficio",
      description: "Gestión de la continuidad del beneficio",
      level: "0",
      state: "s1_pendiente",
      type: "operative",
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    },
    {
      code: "PO04-PRONABEC",
      name: "Gestión de la recuperación del beneficio",
      description: "Gestión de la recuperación del beneficio",
      level: "0",
      state: "s1_pendiente",
      type: "operative",
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    },
    {
      code: "PS01-PRONABEC",
      name: "Gestión de recursos humanos",
      description: "Gestión de recursos humanos",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    },
    {
      code: "PS02-PRONABEC",
      name: "Administración de recursos financieros",
      description: "Administración de recursos financieros",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    },
    {
      code: "PS03-PRONABEC",
      name: "Gestión de abastecimiento",
      description: "Gestión de abastecimiento",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    },
    {
      code: "PS04-PRONABEC",
      name: "Gestión de tecnologías de la información y comunicación",
      description: "Gestión de tecnologías de la información y comunicación",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    },
    {
      code: "PS05-PRONABEC",
      name: "Atención de asuntos jurídicos",
      description: "Atención de asuntos jurídicos",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    },
    {
      code: "PS06-PRONABEC",
      name: "Atención al ciudadano y administración del archivo",
      description: "Atención al ciudadano y administración del archivo",
      level: "0",
      state: "s1_pendiente",
      type: "support",
      ownerid: "cm6f5tmzm0006ht1080kimo0r",
      mapaId: "cm6f5tmz90003ht10cjbi5bpg",
      managerId: "cm6f5wu6z0000htbkdf6wzahi"
    }
  ]
};


