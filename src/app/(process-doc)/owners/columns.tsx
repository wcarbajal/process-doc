"use client";

import { Owner } from '@/interface/owner/owner.interface';
import { ColumnDef } from "@tanstack/react-table";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Owner>[] = [
  {
    accessorKey: "nombres",
    header: () => <div className="text-right">N°</div>,
    cell: ( { row } ) => {
      const numero = +row.id + 1;
      return <div className="text-right font-medium">{ numero }</div>;
    },
  },
  {
    accessorKey: "nombre",
    header: "Nombres",
  },
  {
    accessorKey: "apellidos",
    header: "Apellidos",
  },
  {
    accessorKey: "unidadFuncional.nombre",
    header: "Oficina o Dirección",
  },
  {
    accessorKey: "-",
    header: () => <div className="text-center">Opciones</div>,
    cell: ( { row } ) => {
      
      return (
        <div className="flex ">
          <MdDeleteOutline size={20} className="cursor-pointer hover:text-blue-500" />
          <CiEdit size={20} className="cursor-pointer hover:text-blue-500" onClick={ () => {
              console.log(row.original.id)

          }}/>
          
        </div> );
    }
  },
];

