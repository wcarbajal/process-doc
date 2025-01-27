import { useState } from 'react';
import { MdClose, MdOutlineEdit } from 'react-icons/md';

interface Props {
  key: string;
  codigo: string;
  nombre: string;
  isOperative: boolean;
}
export const ItemProcess = ( { key, nombre, codigo, isOperative }: Props ) => {

  const [ visile, setVisible ] = useState( false );
  

  return (
    <div key={ key } className="flex " onMouseOver={ () => { setVisible( true ); } } onMouseOut={ () => { setVisible( false ); } }>

      {/* Editar Proceso */ }
      <div hidden={ !visile } className="w-0" >
        <MdClose color='red' className="relative top-2 -right-1 cursor-pointer" size={ 20 } />
        <MdOutlineEdit color='red' className="relative -top-3.5 -right-6  cursor-pointer" size={ 20 } />
      </div>

      {/* Mostrar Proceso */ }
      {
        isOperative && (
          <>
            <div className="flex bg-white w-48 h-32 ml-5 rounded-md gap-1 ">
              <p className="flex items-center w-24 text-sm m-1 ">{ codigo }</p>
              <div className="w-0 border border-slate-300"></div>
              <p className="flex items-center w-44 text-sm m-1 ">{ nombre }</p>
            </div>
            <div className="w-0 h-0 border-[20px] border-y-[64px] border-transparent border-l-white border-r-0"></div>
          </> )
      }
      {
        !isOperative && (
          <div className="flex items-center bg-white w-72  h-20 rounded-md gap-2 my-2">
            <p className="w-24 text-sm m-1">{ codigo }</p>
            <div className="w-0 h-12 border border-slate-300"></div>
            <p className="w-44 text-sm m-1">{ nombre }</p>
          </div> )

      }


    </div>
  );
};