import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { TableOwners } from './TableOwners';
import { columns } from './columns';
import { prisma } from '@/lib/prisma';


export default async function Owners() {

  const owners = await prisma.owner.findMany( {
    include: {
      unidadFuncional: {
        select: {
          nombre: true
        }

      }
    }
  } );

  return (
    <DefaultLayout>


      <div className="flex flex-col items-center">
        <h2 className="m-5">
          Dueños de procesos
        </h2>

        <TableOwners columns={ columns } data={ owners } />

      </div>

    </DefaultLayout>
  );
}
