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
      userId: 'cm6mogoip0000cml01rz14qy5',
    },
    {
      userId: 'cm6mogoiq0001cml06174xrqb',

    },
  ],
  owner:[
    { "nombre": "Alexandra", "apellidos": "Ames Brachowicz", "unidadFuncionalId": "cm6mogojk0004cml0adfqukl8" },
    { "nombre": "Sol Mariana", "apellidos": "García Belaunde Mora", "unidadFuncionalId": "cm6mogojk0005cml0iqu2pzk2" },
    { "nombre": "Ronald", "apellidos": "Coronado Morla", "unidadFuncionalId": "cm6mogojk0006cml0k4r6fcx4" },
    { "nombre": "Bruno Giussepe", "apellidos": "Yika Zapata", "unidadFuncionalId": "cm6mogojk0009cml02htapy11" },
    { "nombre": "Elvira", "apellidos": "Pacherres Mendives De Severino", "unidadFuncionalId": "cm6mogojk000ccml0wzvbn0l1" },
    { "nombre": "César Paul", "apellidos": "Hernández Pérez", "unidadFuncionalId": "cm6mogojk000dcml03l92t4kn" },
    { "nombre": "Dante Javier", "apellidos": "Beltran Arias", "unidadFuncionalId": "cm6mogojk000ecml03i2rzvi1" },
    { "nombre": "Andy Erick", "apellidos": "Arellano Chicana", "unidadFuncionalId": "cm6mogojk000jcml0r22tc6hm" },
    { "nombre": "Carlos Fernando", "apellidos": "Dulanto Paniagua", "unidadFuncionalId": "cm6mogojk000kcml0yr6ssxwg" },
    { "nombre": "Maricarmen", "apellidos": "Benites Avalo", "unidadFuncionalId": "cm6mogojk000lcml0d11wbkb8" },
    { "nombre": "Mariana", "apellidos": "Cerrón Cerrón", "unidadFuncionalId": "cm6mogojk000mcml0ugl62i1w" },
    { "nombre": "Erik Enrique", "apellidos": "Tello Corrales", "unidadFuncionalId": "cm6mogojk000ncml0zjtki1k6" },
  ]
  
};


