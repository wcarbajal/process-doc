
import { ViewImage } from '@/components/Image/ViewImage';
import { Button } from '@/components/ui/button';

import { prisma } from '@/lib/prisma';
import { FormProcess } from './ui/FormProcess';

interface Props {
  params: Promise<{
    id: string;
  }>;


}


export default async function ProcessPage( { params }: Props ) {


  const { id } = await params;

  const proceso = await prisma.process.findFirst( {
    where: { id },

  } );
  const owner = await prisma.owner.findMany({
    include:{
      unidadFuncional: {
        select:{
          nombre:true
        }
      }
    }
  });
  const managers = await prisma.manager.findMany({
    include: {
      user:{
        select:{
          name: true
        }
      }
    }
  })

  if ( !proceso ) {
    return <>Proceso no encontrado</>;
  }

  return (

    <>

      <div className="flex justify-center gap-2 my-2">

        <Button variant='outline'>Diagrama</Button>{/*  */ }
        <Button variant='outline'>Ficha</Button>
        <Button variant='outline'>Procedimiento</Button>
        <FormProcess owners={ owner } manager={ managers } nombrePadre={ proceso.name } />
      </div>



      <ViewImage src={'/images/model.png'} alt={ 'La imagen va aquí' } width={ 1200 } height={ 600 } className={ 'border' } />

      <>
        Opciones
        <label>
          Agregar hijo:          
        </label>
        
        

      </>

    </>


  );
}
