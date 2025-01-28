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


export default async function ProcessLayout( {
  children
}: {
  children: React.ReactNode;
} ) {

  const processList = await prisma.process.findMany();

  return (
    <DefaultLayout >
      <div className="flex gap-2">


        <div className=" w-1/4 h-[85vh]">
          <div className="flex m-2 mb-5 ">

            <Input placeholder="Nombre de proceso... " />

          </div>

          <div>
            Lista de Procesos
            <ScrollArea className="h-[75vh] w-full p-2 border ">
              <Link href={ '/process' } className="flex  hover:bg-slate-200 "> Mapa de proceso</Link>
              {
                processList.map( process => (
                  <Link key={ process.code } href={ `/process/${ process.id }` } className="flex text-sm  hover:bg-slate-200 mb-1"> { process.code }  { process.name }</Link>
                ) )
              }


            </ScrollArea>

          </div>



        </div>

        <div className="border w-3/4 h-[85vh]">
         
          { children }
        </div>



      </div>

    </DefaultLayout>
  );
}