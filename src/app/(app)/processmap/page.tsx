import { MapaProcesos } from '@/components';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { listProcess, Mapa } from '@/components/MapaProcesos/processList';
import { prisma } from '@/lib/prisma';

export default async function ProcessMap() {

  const processList = await prisma.process.findMany( {
    include: {
      Manager: {
        include: {
          user: true
        },
      },
      owner: {
        include: {
          user: true
        },
      },
    },
  } );
  //todo: Luego reemplazar con process list
    const procesosEstrategicos = listProcess.filter( item => item.tipo === "PE" );
    const procesosOperativos = listProcess.filter( item => item.tipo === "PO" );
    const procesosSoporte = listProcess.filter( item => item.tipo === "PS" );

  return (

    <DefaultLayout>
      {/* Titulo de Mapa */ }
      <p className="text-xl text-center font-bold mb-5">{ Mapa.nombre }</p>
      <MapaProcesos pEstrategicos={ procesosEstrategicos } pOperativos={ procesosOperativos } pSoporte={ procesosSoporte } mapa={ Mapa } />
    </DefaultLayout>
  );
}