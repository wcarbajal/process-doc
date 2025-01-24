import { Process, Mapa } from '@/interface';
import "@/css/style.css";
import { MdOutlineDeleteForever, MdOutlineEdit } from 'react-icons/md';
import { useState } from 'react';


interface Props {
  pEstrategicos: Process[];
  pOperativos: Process[];
  pSoporte: Process[];
  mapa: Mapa;
}

export const MapaProcesos = ( { pEstrategicos, pOperativos, pSoporte, mapa }: Props ) => {

  const [visile, setVisible]  = useState<boolean>()

  return (
    <div className="flex flex-col items-center">

      <div className="flex gap-5 w-fit h-fit bg-slate-200 p-3">

        {/* Entrada */ }
        <div className=" w-20 h-[83vh] rounded-md bg-green-600 ">
          <span className="text-white vertical-text font-bold text-lg m-2 text-center">
            { mapa.entrada }
            <div className="absolute bottom-0 -left-3">
              <div className="flex flex-col">
                <button>
                  <MdOutlineDeleteForever color="white" />
                </button>
                <button>

                  <MdOutlineEdit color="white" />
                </button>
              </div>
            </div>
          </span>

        </div>

        {/* Procesos */ }
        <div className="flex flex-col">

          {/* Procesos estratégicos */ }
          <div>
            <div className="grid grid-cols-2 gap-4 place-items-center w-[930px] h-56 bg-gray-400  rounded-md">
              {

                pEstrategicos.map( ( process, item ) => (
                  <div key={ item } className="flex items-center bg-white w-72  h-20 rounded-md gap-2 my-2">
                    <p className="w-24 text-sm m-1">{ process.codigo }</p>
                    <div className="w-0 h-12 border border-slate-300"></div>
                    <p className="w-44 text-sm m-1">{ process.nombre }</p>
                  </div>
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
                    <div className="flex bg-white w-48 h-32 ml-5 rounded-md gap-1 ">
                      <p className="flex items-center w-24 text-sm m-1 ">{ process.codigo }</p>
                      <div className="w-0 border border-slate-300"></div>
                      <p className="flex items-center w-44 text-sm m-1 ">{ process.nombre }</p>
                    </div>
                    <div className="w-0 h-0 border-[20px] border-y-[64px] border-transparent border-l-white border-r-0"></div>
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
                  <div key={ item } className="flex items-center bg-white w-72  h-20 rounded-md gap-2 my-2">
                    <p className="w-24 text-sm m-1">{ process.codigo }</p>
                    <div className="w-0 h-12 border border-slate-300"></div>
                    <p className="w-44 text-sm m-1">{ process.nombre }</p>
                  </div>
                ) )
              }

            </div>

          </div>



        </div>

        {/* Salida */ }
        <div className=" w-20 h-[83vh] rounded-md bg-green-600 ">
          <span className="text-white vertical-text font-bold  text-lg m-2 text-center">{ mapa.salida }</span>
        </div>

      </div>
    </div>



  );
};