import { UnidadFuncional } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { Owner } from '../interface/owner/owner.interface';


interface SeedManager {
  userId: string;
  
}interface SeedOwner{
  nombre: string,
  apellidos: string,
  unidadFuncionalId: string
}

interface SeedData {
  manager: SeedManager[];
  owner: SeedOwner[];
}

export const incialData: SeedData = {

  manager: [
    {
      userId: 'cm6ktl3ya0000htok77wexr3f',
    },
    {
      userId: 'cm6ktl3yt0002htokgvx2wscu',
    },
  ],
  owner:[
    { "nombre": "Alexandra", "apellidos": "Ames Brachowicz", "unidadFuncionalId": "cm6ktl40p0004htokjobt10y9" },
    { "nombre": "César Paul", "apellidos": "Hernández Pérez", "unidadFuncionalId": "cm6ktl40p000dhtoksequkki1" },
    { "nombre": "Dante Javier", "apellidos": "Beltran Arias", "unidadFuncionalId": "cm6ktl40p000ehtok8wstznrj" },
    { "nombre": "Andy Erick", "apellidos": "Arellano Chicana", "unidadFuncionalId": "cm6ktl40p000jhtokf3olt95p" },
    { "nombre": "Erik Enrique", "apellidos": "Tello Corrales", "unidadFuncionalId": "cm6ktl40p000nhtok6k8qteje" },
    { "nombre": "Mariana", "apellidos": "Cerrón Cerrón", "unidadFuncionalId": "cm6ktl40p000mhtokk6a7fyi7" },
    { "nombre": "Carlos Fernando", "apellidos": "Dulanto Paniagua", "unidadFuncionalId": "cm6ktl40p000khtokou1iu5qc" },
    { "nombre": "Maricarmen", "apellidos": "Benites Avalo", "unidadFuncionalId": "cm6ktl40p000lhtokmy5kgjls" },
    { "nombre": "Ronald", "apellidos": "Coronado Morla", "unidadFuncionalId": "cm6ktl40p0006htokz2gngoll" },
    { "nombre": "Sol Mariana", "apellidos": "García Belaunde Mora", "unidadFuncionalId": "cm6ktl40p0005htokbwf5zj1v" },
    { "nombre": "Bruno Giussepe", "apellidos": "Yika Zapata", "unidadFuncionalId": "cm6ktl40p0009htokzij0t2px" },
    { "nombre": "Elvira", "apellidos": "Pacherres Mendives De Severino", "unidadFuncionalId": "cm6ktl40p000chtokkjs5ldqv" }
  ]
  
};


