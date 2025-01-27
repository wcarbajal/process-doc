import {incialData} from './intialData3';
import { prisma } from '../lib/prisma';



async function main() {

// borrar registros previos

//insertar en tablas



const { process } =incialData

await prisma.process.createMany({
  data: process, 
})  

  console.log( 'Seed ejecutado correctamente' );

}

( () => {

  if ( process.env.NODE_ENV === 'production' ) return;

  main();

} )();