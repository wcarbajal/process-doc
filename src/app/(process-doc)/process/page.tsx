import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';
import { MapaProcesos } from '../../../components/MapaProcesos/MapaProcesos';
import { Input } from '@/components/ui/input';
import { ScrollArea } from "@/components/ui/scroll-area";
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from '@/components/ui/card';




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
