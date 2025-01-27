import {incialData} from './intialData2';
import { prisma } from '../lib/prisma';



async function main() {

//insertar en tablas

const { manager } =incialData

await prisma.manager.createMany({
  data: manager, 
})  


  console.log( 'Seed ejecutado correctamente' );

}

( () => {

  if ( process.env.NODE_ENV === 'production' ) return;

  main();

} )();