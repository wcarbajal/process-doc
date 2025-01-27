import {incialData} from './intialData';
import { prisma } from '../lib/prisma';



async function main() {

//insertar en tablas
const { users, mapa, owner } =incialData

await prisma.user.createMany({
  data: users, 
})  
await prisma.mapa.createMany({
  data: mapa, 
})
await prisma.owner.createMany({
  data: owner, 
})

  console.log( 'Seed ejecutado correctamente' );

}

( () => {

  if ( process.env.NODE_ENV === 'production' ) return;

  main();

} )();