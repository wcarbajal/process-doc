import { MapaProcesos } from '@/components';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { Mapa } from '@/components/MapaProcesos/processList';
import { prisma } from '@/lib/prisma';

export default async function ProcessMap() {


    const mapa = await prisma.mapa.findFirst({
      include:{
        process:true
      }
    }) // Aquí se debería obtener la lista de procesos desde la BD

  
  //todo: Luego reemplazar con process list
    const procesosEstrategicos = mapa?.process.filter( item => item.type === "strategy" );
    const procesosOperativos = mapa?.process.filter( item => item.type === "operative" );
    const procesosSoporte = mapa?.process.filter( item => item.type === "support" );

  return (

    <DefaultLayout>
      {/* Titulo de Mapa */ }
      <p className="text-xl text-center font-bold mb-5">{ Mapa.nombre }</p>
      <MapaProcesos pEstrategicos={ procesosEstrategicos } pOperativos={ procesosOperativos } pSoporte={ procesosSoporte } mapa={ mapa ?? null } />
    </DefaultLayout>
  );
}