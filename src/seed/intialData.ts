import { UnidadFuncional } from '@prisma/client';
import bcrypt from 'bcryptjs';


interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}
interface SeedMapa {
  name: string;
  input: string;
  output: string;
}

interface SeedUnidadFuncional {
  nombre: string;

}



interface SeedData {
  users: SeedUser[];
  mapa: SeedMapa[];
  unidadFuncional: SeedUnidadFuncional[];
  
}

export const incialData: SeedData = {
  users: [
    {
      name: "Wuilmer Alexander Carbajal Barrenechea",
      email: "wcarbajal@outlook.com",
      password: bcrypt.hashSync( '123456', 10 ),
      role: "admin"
    },
    {
      name: "Favio Alessandro Carbajal Urbano",
      email: "fcarbajal@outlook.com",
      password: bcrypt.hashSync( '123456', 10 ),
      role: "user"
    },
    {
      name: "Juana Asencio Molina",
      email: "jascencio@outlook.com",
      password: bcrypt.hashSync( '123456', 10 ),
      role: "user"
    }
  ],
  mapa: [ {
    "name": "Mapa Pronabec",
    "input": "Ciudadanos de bajos, insuficientes recursos o alto rendimiento académico con barreras de acceso a la educación superior de calidad 2",
    "output": "Ciudadanos que accedieron a educación superior de calidad y contribuyen en el desarrollo económico y social 444"
  }
  ],
  unidadFuncional:[
    { "nombre": "Dirección Ejecutiva" },
    { "nombre": "Dirección de Coordinación Nac. y Cooperación Internacional" },
    { "nombre": "Dirección de Gestión de Becas" },
    { "nombre": "Subdirección de Evaluación y Selección" },
    { "nombre": "Subdirección de Seguimiento y Supervisión" },
    { "nombre": "Dirección de Gestión de Crédito Educativo" },
    { "nombre": "Subdirección de Evaluación y Otorgamiento" },
    { "nombre": "Subdirección de Seguimiento y Cumplimiento" },
    { "nombre": "Dirección de Acompañamiento Socioemocional y Bienestar" },
    { "nombre": "Oficina de Asesoría Jurídica" },
    { "nombre": "Oficina de Planeamiento y Presupuesto" },
    { "nombre": "Unidad de Modernización de La Gestión" },
    { "nombre": "Unidad de Estudios Sociales e Investigación" },
    { "nombre": "Unidad de Planeamiento" },
    { "nombre": "Unidad de Presupuesto" },
    { "nombre": "Oficina de Tecnologías de la Información" },
    { "nombre": "Oficina de Gestión de Recursos Humanos" },
    { "nombre": "Oficina de Atención a la Ciudadanía y Gestión Documental" },
    { "nombre": "Oficina de Comunicaciones y Relaciones Institucionales" },
    { "nombre": "Oficina de Administración y Finanzas" },
    { "nombre": "Unidad de Abastecimiento" },
    { "nombre": "Unidad de Contabilidad y Control Previo" },
    { "nombre": "Unidad de Subvenciones y Financiamiento" },
    { "nombre": "Unidad de Tesorería" }
  ]
  
};




export const Mapa = {
  nombre: 'Mapa Pronabec',
  entrada: 'Ciudadanos de bajos, insuficientes recursos o alto rendimiento académico con barreras de acceso a la educación superior de calidad',
  salida: 'Ciudadanos que accedieron a educación superior de calidad y contribuyen en el desarrollo económico y social'
};


export const listProcess = [
  {
    codigo: "PE01-PRONABEC",
    nombre: "Planificación estratégica",
    tipo: "PE",
    descripcion: "Planificación estratégica",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
  {
    codigo: "PE02-PRONABEC",
    nombre: "Gestión de la mejora continua institucional",
    tipo: "PE",
    descripcion: "Gestión de la mejora continua institucional",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
  {
    codigo: "PE03-PRONABEC",
    nombre: "Gestión de estrategias de comunicación, cooperación y relaciones internacionales",
    tipo: "PE",
    descripcion: "Gestión de estrategias de comunicación, cooperación y relaciones internacionales",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
  {
    codigo: "PE04-PRONABEC",
    nombre: "Gestión de control y riesgos",
    tipo: "PE",
    descripcion: "Gestión de control y riesgos",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
  {
    codigo: "P001-PRONABEC",
    nombre: "Diseño y actualización de instrumentos para la gestión del beneficio.",
    tipo: "PO",
    descripcion: "Diseño y actualización de instrumentos para la gestión del beneficio.",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
  {
    codigo: "PO02-PRONABEC",
    nombre: "Gestión del otorgamiento del beneficio",
    tipo: "PO",
    descripcion: "Gestión del otorgamiento del beneficio",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
  {
    codigo: "PO03-PRONABEC",
    nombre: "Gestión de la continuidad del beneficio",
    tipo: "PO",
    descripcion: "Gestión de la continuidad del beneficio",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
  {
    codigo: "PO04-PRONABEC",
    nombre: "Gestión de la recuperación del beneficio",
    tipo: "PO",
    descripcion: "Gestión de la recuperación del beneficio",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
  {
    codigo: "PS01-PRONABEC",
    nombre: "Gestión de recursos humanos",
    tipo: "PS",
    descripcion: "Gestión de recursos humanos",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
  {
    codigo: "PS02-PRONABEC",
    nombre: "Administración de recursos financieros",
    tipo: "PS",
    descripcion: "Administración de recursos financieros",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
  {
    codigo: "PS03-PRONABEC",
    nombre: "Gestión de abastecimiento",
    tipo: "PS",
    descripcion: "Gestión de abastecimiento",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
  {
    codigo: "PS04-PRONABEC",
    nombre: "Gestión de tecnologías de la información y comunicación",
    tipo: "PS",
    descripcion: "Gestión de tecnologías de la información y comunicación",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
  {
    codigo: "PS05-PRONABEC",
    nombre: "Atención de asuntos jurídicos",
    tipo: "PS",
    descripcion: "Atención de asuntos jurídicos",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
  {
    codigo: "PS06-PRONABEC",
    nombre: "Atención al ciudadano y administración del archivo",
    tipo: "PS",
    descripcion: "Atención al ciudadano y administración del archivo",
    fechaCreacion: "2021-01-01",
    fechaActualizacion: "2021-12-31",
    estado: "Activo",
  },
];