
import React from 'react';
import { MapaProcesos } from '../../../components/MapaProcesos/MapaProcesos';

import { prisma } from '@/lib/prisma';






export default async function Processes() {

  const mapa = await prisma.mapa.findFirst( {
    include: {
      process: true
    }
  } ); // Aquí se debería obtener la lista de procesos desde la BD

  const procesosEstrategicos = mapa?.process.filter( item => item.type === "strategy" );
  const procesosOperativos = mapa?.process.filter( item => item.type === "operative" );
  const procesosSoporte = mapa?.process.filter( item => item.type === "support" );

  return (

    <MapaProcesos pEstrategicos={ procesosEstrategicos } pOperativos={ procesosOperativos } pSoporte={ procesosSoporte } mapa={ mapa ?? null } />


  );
}
