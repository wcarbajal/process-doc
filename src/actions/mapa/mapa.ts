'use server';

import { prisma } from '@/lib/prisma';

export const UpdateNameMap = async ( idMap: string, newName: string ) => {
  try {

    const mapa = await prisma.mapa.update( {
      where: { id: idMap },
      data: {
        name: newName,
      },
    } );
    return { success: true, input: mapa.name };

  } catch ( error ) {
    console.log( error );
  }

};

export const UpdateInputMap = async ( idMap: string, newInput: string ) => {
  try {

    const mapa = await prisma.mapa.update( {
      where: { id: idMap },
      data: {
        input: newInput,
      },
    } );
    return { success: true, input: mapa.input };

  } catch ( error ) {
    console.log( error );
  }

};

export const UpdateOutputMap = async ( idMap: string, newOutput: string ) => {
  try {

    const mapa = await prisma.mapa.update( {
      where: { id: idMap },
      data: {
        output: newOutput,
      },
    } );
    return { success: true, input: mapa.input };

  } catch ( error ) {
    console.log( error );
  }

};

export const UpdateInOutMap = async ( idMap: string, textView: string, tipo: 'IN' | 'OUT' ) => {
  try {


    if ( tipo === 'IN' ) {
      const mapa = await prisma.mapa.update( {
        where: { id: idMap },
        data: {
          input: textView,
        },
      } );
      return { success: true, input: mapa.input };
    }
    const mapa = await prisma.mapa.update( {
      where: { id: idMap },
      data: {
        output: textView,
      },
    } );
    return { success: true, input: mapa.input };

  } catch ( error ) {
    console.log( error );
  }

};