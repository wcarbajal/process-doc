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
      userId: 'cm6jlr8mz0000cmnc62cxro6w',
    },
    {
      userId: 'cm6jlr8mz0001cmncbae8hoqb',
    },
  ],
  owner:[
    { "nombre": "Alexandra", "apellidos": "Ames Brachowicz", "unidadFuncionalId": "cm6jlr8no0004cmncay5x1vo0" },
    { "nombre": "César Paul", "apellidos": "Hernández Pérez", "unidadFuncionalId": "cm6jlr8no000dcmnc1n9nj29t" },
    { "nombre": "Dante Javier", "apellidos": "Beltran Arias", "unidadFuncionalId": "cm6jlr8no000ecmnc8uv02xdc" },
    { "nombre": "Andy Erick", "apellidos": "Arellano Chicana", "unidadFuncionalId": "cm6jlr8no000jcmncjq3v1gwb" },
    { "nombre": "Erik Enrique", "apellidos": "Tello Corrales", "unidadFuncionalId": "cm6jlr8no000ncmncr2hbcvm8" },
    { "nombre": "Mariana", "apellidos": "Cerrón Cerrón", "unidadFuncionalId": "cm6jlr8no000mcmncevtdloal" },
    { "nombre": "Carlos Fernando", "apellidos": "Dulanto Paniagua", "unidadFuncionalId": "cm6jlr8no000kcmncwel176tp" },
    { "nombre": "Maricarmen", "apellidos": "Benites Avalo", "unidadFuncionalId": "cm6jlr8no000lcmncvmqtk0dl" },
    { "nombre": "Ronald", "apellidos": "Coronado Morla", "unidadFuncionalId": "cm6jlr8no0006cmnc0wx5olgm" },
    { "nombre": "Sol Mariana", "apellidos": "García Belaunde Mora", "unidadFuncionalId": "cm6jlr8no0005cmnc1wc4vaye" },
    { "nombre": "Bruno Giussepe", "apellidos": "Yika Zapata", "unidadFuncionalId": "cm6jlr8no0009cmnchnfbvo1x" },
    { "nombre": "Elvira", "apellidos": "Pacherres Mendives De Severino", "unidadFuncionalId": "cm6jlr8no000ccmnc1ykvu6v4" }
  ]
  
};


