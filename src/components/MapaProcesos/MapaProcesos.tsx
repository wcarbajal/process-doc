'use client';
import { Process, Mapa } from '@/interface';
import "@/css/style.css";
import { MdClose, MdModeEditOutline, MdOutlineEdit } from 'react-icons/md';
import { RiEditLine } from "react-icons/ri";
import { useState } from 'react';
import { ItemProcess } from './ItemProcess';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '../ui/button';
import { UpdateInputMap, UpdateOutputMap } from '@/actions';
import { redirect } from 'next/navigation';
import { InputOutput } from './artefacts/InputOutput';


interface Props {
  pEstrategicos: Process[];
  pOperativos: Process[];
  pSoporte: Process[];
  mapa: Mapa | null;
}

export const MapaProcesos = ( { pEstrategicos, pOperativos, pSoporte, mapa }: Props ) => {



  if ( mapa == null ) {
    return <div>No hay mapa seleccionado</div>;
  }



  return (
    <div className="flex flex-col items-center">

      <div className="flex gap-5 w-fit h-fit bg-slate-200 p-3">

        {/* Entrada */ }
        <InputOutput id={ mapa.id } mesaggeView={ mapa.input } tipo={ 'IN' } />

        {/* Procesos */ }
        <div className="flex flex-col">

          {/* Procesos estratégicos */ }
          <div>
            <div className="grid grid-cols-2 gap-4 place-items-center w-[930px] h-56 bg-gray-400  rounded-md">
              {
                pEstrategicos.map( ( process ) => (
                  <ItemProcess key={ process.codigo } codigo={ process.codigo } nombre={ process.nombre } isOperative={ false } />
                ) )
              }

            </div>
            <div className="w-0 h-0 border-[40px] border-x-[465px] border-transparent border-t-gray-400 border-b-0">
            </div>

          </div>
          {/* Procesos operativos */ }
          <div className="flex my-10">

            <div className="flex items-center justify-items-center w-[930px] h-48  bg-sky-400  rounded-md">
              {
                pOperativos.map( ( process, item ) => (
                  <div key={ item } className="flex">
                    <ItemProcess key={ process.codigo } codigo={ process.codigo } nombre={ process.nombre } isOperative={ true } />
                  </div>
                ) )
              }
            </div>
            <div className="w-0 h-0 border-[20px] border-y-[96px] border-transparent border-l-sky-400 border-r-0"></div>

          </div>
          {/* Procesos de Soporte */ }
          <div>

            <div className="w-0 h-0 border-[40px] border-x-[465px] border-transparent border-b-green-600 border-t-0"></div>
            <div className="grid grid-cols-3 gap-4 place-items-center w-[930px] h-56 bg-green-600  rounded-md">
              {

                pSoporte.map( ( process, item ) => (
                  <ItemProcess key={ process.codigo } codigo={ process.codigo } nombre={ process.nombre } isOperative={ false } />
                ) )
              }

            </div>

          </div>



        </div>

        {/* Salida */ }

        <InputOutput id={ mapa.id } mesaggeView={ mapa.output } tipo={ 'OUT' } />

      </div>
    </div>



  );
};