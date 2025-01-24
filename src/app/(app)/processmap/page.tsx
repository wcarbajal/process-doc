import { MapaProcesos } from '@/components';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
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
  console.log( processList[0].owner.user );
  return (

    <DefaultLayout>

      <MapaProcesos />
    </DefaultLayout>
  );
}