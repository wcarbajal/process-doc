'use server'

import { prisma } from '@/lib/prisma';


export const getNameProcess = async ( id:string) => {

  const process = await prisma.process.findFirst({
    where: { id}
  })

  if (!process) {
    throw new Error(`Process with id ${id} not found`);
  }


  return `${process.code} ${process.name}`;

  
}