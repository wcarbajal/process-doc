import {incialData} from './intialData';
import { prisma } from '../lib/prisma';
import { UnidadFuncional } from '@prisma/client';



async function main() {

//insertar en tablas
const { users, mapa, unidadFuncional } =incialData

await prisma.user.createMany({
  data: users, 
})  
await prisma.mapa.createMany({
  data: mapa, 
})
await prisma.unidadFuncional.createMany({
  data: unidadFuncional, 
})

  console.log( 'Seed ejecutado correctamente' );

}

( () => {

  if ( process.env.NODE_ENV === 'production' ) return;

  main();

} )();