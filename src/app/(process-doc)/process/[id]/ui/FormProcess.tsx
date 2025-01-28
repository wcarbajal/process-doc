'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Process } from '@/interface';
import { Metadata } from 'next';

import { useState } from 'react';
import { useForm } from 'react-hook-form';


export const metadata: Metadata = {
  title: "Nuevo proceso  | Process Doc",
  description: "Registri de nuevo proceso en la plataforma Process Doc",
}

export const FormProcess = () => {

  const [ dialogOpen, setDialogOpen ] = useState( false );


    const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm<Process>( {
      defaultValues: {
        
  
      },
    } );

    const onSubmit = handleSubmit( async(value) => {
      console.log(value);
    })



  return (
    <div>

      <Button onClick={ () => setDialogOpen( true ) }>Agregar hijo</Button>

      <Dialog open={ dialogOpen } onOpenChange={ setDialogOpen }>
        <DialogContent >
          <DialogHeader>
            <DialogTitle>Registrar proceso hijo</DialogTitle>
            <DialogDescription  >

            <form method='POST' onSubmit={ onSubmit }>
                <div>
                  <Label>Nombre</Label>
                <Input
                    type="text"
                    placeholder="PO01-PRONABEC Proceos de Soporte Académico" 
                    {...register('name',
                      {
                        required:{
                          value:true,
                          message:'Nombre es requerido'
                        }
                      }

                    )}
                />
                {
                    errors.name && (
                      <span className="text-red-500">{ errors.name.message }</span>
                    )
                  }

                </div>

                <Button onClick={ () => setDialogOpen( false ) } variant="default">Cerrar</Button>
              </form>

            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
