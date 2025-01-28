import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { prisma } from '@/lib/prisma';

interface Props {
  params: {
    id: string;
  };
}


export default async function ProcessPage( { params }: Props ) {

  const id = params.id;
  const proceso = await prisma.process.findFirst({
    where: { id },

  })
  if (!proceso) {
    return <>Proceso no encontrado</>
  }

  return (
    

      <div>{ ` Pagina ${ id }` }</div>


    
  );
}
