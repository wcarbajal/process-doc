'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { UpdateInOutMap } from '@/actions';
import { redirect } from 'next/navigation';

interface Props{
  id: string;
  mesaggeView: string;
  tipo: 'IN' | 'OUT';
}


export const InputOutput = ( {id, mesaggeView, tipo}: Props) => {


   const [ visile, setVisible ] = useState<boolean>( false );
    const [ dialogOpen, setDialogOpen ] = useState( false );
    
    const [ message, setMessage ] = useState<string>( mesaggeView ?? '' );

      const handleUpdateOutput = async ( id: string, newOutput: string ) => {    // 
        await UpdateInOutMap( id, newOutput, tipo );
        setDialogOpen( false );
        redirect( "/processmap" );
      };
    
  return (
    <div className=" w-20 h-[83vh] rounded-md bg-green-600 " onMouseOver={ () => { setVisible( true ); } } onMouseOut={ () => { setVisible( false ); } }>
    <span className="text-white vertical-text font-bold text-lg m-2 text-center">
      { mesaggeView }
      <span hidden={ !visile } className="absolute -bottom-2 right-0 rotate-180">

        <MdModeEditOutline size={30} onClick={ () => setDialogOpen( true ) } color="#662483" className="hover:font-bold cursor-pointer" />

      </span>
      <Dialog open={ dialogOpen } onOpenChange={ setDialogOpen }>

        <DialogContent >
          <DialogHeader>
            <DialogTitle>Actualizar la salida del mapa de proceso</DialogTitle>
            <DialogDescription  >
              <Textarea defaultValue={ message } onChange={ ( e ) => setMessage( e.target.value ) } style={ { fontSize: '1.2rem', height: '120px', margin: '20px 0px' } } placeholder="Ingrese la salida del mapa de proceso." />
              <Button onClick={ () => handleUpdateOutput( id, message ) } variant="default">Actualizar</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </span>

  </div>
  )
}