import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';
import { MapaProcesos } from '../../../components/MapaProcesos/MapaProcesos';
import { Input } from '@/components/ui/input';
import { ScrollArea } from "@/components/ui/scroll-area";
import { prisma } from '@/lib/prisma';


export default async function Process() {
  const processList =  await prisma.process.findMany()
  
  return (
    <DefaultLayout >
      <div className="flex gap-2">


        <div className="border w-1/4 h-[85vh]">
          <div className="flex">

            <Input placeholder="Nombre de proceso... " />




          </div>

          <div>
            Lista de Procesos
            <ScrollArea  className="h-[75vh] w-full bg-red-500 rounded-md border p-4">
              
              
            </ScrollArea>

          </div>



        </div>

        <div className="border w-3/4 h-[85vh]">
          <div>
            Resumen o detalles del proceso
          </div>

          <div>
            Imagen de proceso
          </div>
        </div>



      </div>

    </DefaultLayout>

  );
}
