import {incialData} from './intialData';
import { prisma } from '../lib/prisma';



async function main() {

// borrar registros previos
await prisma.process.deleteMany();

await prisma.manager.deleteMany();

await prisma.user.deleteMany()
await prisma.mapa.deleteMany()
await prisma.owner.deleteMany()


//insertar en tablas




  console.log( 'Delete ejecutado correctamente' );

}

( () => {

  if ( process.env.NODE_ENV === 'production' ) return;

  main();

} )();