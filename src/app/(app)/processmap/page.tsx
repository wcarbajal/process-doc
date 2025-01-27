import { MapaProcesos } from '@/components';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { listProcess, Mapa } from '@/components/MapaProcesos/processList';
import { prisma } from '@/lib/prisma';

export default async function ProcessMap() {


    const mapa = await prisma.mapa.findFirst() // Aquí se debería obtener la lista de procesos desde la BD

  
  //todo: Luego reemplazar con process list
    const procesosEstrategicos = listProcess.filter( item => item.tipo === "PE" );
    const procesosOperativos = listProcess.filter( item => item.tipo === "PO" );
    const procesosSoporte = listProcess.filter( item => item.tipo === "PS" );

  return (

    <DefaultLayout>
      {/* Titulo de Mapa */ }
      <p className="text-xl text-center font-bold mb-5">{ Mapa.nombre }</p>
      <MapaProcesos pEstrategicos={ procesosEstrategicos } pOperativos={ procesosOperativos } pSoporte={ procesosSoporte } mapa={ mapa ?? null } />
    </DefaultLayout>
  );
}