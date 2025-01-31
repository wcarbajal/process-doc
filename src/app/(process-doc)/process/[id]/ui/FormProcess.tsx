'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Process } from '@/interface';
import { Metadata } from 'next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Owner } from '@/interface/owner/owner.interface';
import { Manager } from '@/interface/manage/manager.interface';


export const metadata: Metadata = {
  title: "Nuevo proceso  | Process Doc",
  description: "Registri de nuevo proceso en la plataforma Process Doc",
};

interface Props{
  nombrePadre: string;
  owners: Owner[],
  manager: Manager[],
}
export const FormProcess = ( {owners, manager, nombrePadre}: Props) => {

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

  const onSubmit = handleSubmit( async ( value ) => {
    console.log( value );
    setDialogOpen( false );

  } );

  watch( 'type' );

  return (
    <>

      <Button variant="outline" onClick={ () => setDialogOpen( true ) }>Agregar hijo</Button>



      <div hidden={ !dialogOpen }>

        <div className="absolute top-0 left-0 w-full h-full bg-slate-300 bg-transparent/80 flex justify-center items-center">

          <Card className="w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] h-auto">
            <CardHeader>

              <p className="text-lg text-center "> <span className="font-bold">{nombrePadre}</span> - registro de proceso hijo </p>
             
            </CardHeader>
            <CardContent>

              <form method='POST' onSubmit={ onSubmit } className="flex flex-col gap-2" >
                <div className="flex items-center  ">
                  <Label className="w-26">Código:</Label>
                  <Input
                    type="text"
                    placeholder="PO01-PRONABEC"
                    { ...register( 'code',
                      {
                        required: {
                          value: true,
                          message: 'El código es requerido'
                        },
                        pattern: {
                          value: /^(PE|PO|PS)\d{2}(\.\d{2})*-PRONABEC$/,
                          message: 'Formato inválido. Ej: PO01-PRONABEC'
                        
                        }
                      }

                    ) }
                  />
                </div>
                {
                  errors.code?  (
                    <span className="text-sm text-red-500 ml-22">{ errors.code.message }</span>
                  )
                  : <span></span>
                }
                <div className="flex items-center  ">
                  <Label className="w-26">Nombre:</Label>
                  <Input
                    type="text"
                    placeholder="Proceos de Soporte Académico"
                    { ...register( 'name',
                      {
                        required: {
                          value: true,
                          message: 'Nombre es requerido'
                        }
                      }

                    ) }
                  />
                </div>
                {
                  errors.name?  (
                    <span className="text-sm text-red-500 ml-22">{ errors.name.message }</span>
                  )
                  : <span></span>
                }

                <div className="flex items-center  ">
                  <label htmlFor="type" className="w-26">Tipo:</label>
                  <select
                    className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"

                    { ...register( 'type', {
                      required: {
                        value: true,
                        message: 'Tipo es requerido'
                      }

                    } ) }
                  >
                    <option value="">Seleccione</option>
                    <option value="strategy">Estrategia</option>
                    <option value="operative">Operativa</option>
                    <option value="support">Soporte</option>
                  </select>
                </div>
                {
                  errors.type?  (
                    <span className="text-sm text-red-500 ml-22">{ errors.type.message }</span>
                  )
                  : <span></span>
                }
                <div className="flex items-center  ">
                  <label htmlFor="level" className="w-26">Nivel:</label>
                  <select
                    className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"

                    { ...register( 'level', {
                      required: {
                        value: true,
                        message: 'Nivel es requerido'
                      }

                    } ) }
                  >
                    <option value="">Seleccione...</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>                    
                  </select>
                </div>
                {
                  errors.level?  (
                    <span className="text-sm text-red-500 ml-22">{ errors.level.message }</span>
                  )
                  : <span></span>
                }

                <div className="flex items-center  ">
                  <label htmlFor="type" className="w-26">Decripcion:</label>
                  <Textarea {...register('description',
                    {
                      required: {
                        value: true,
                        message: 'Descripción es requerida'
                      },
                      min: {
                        value:5,
                        message: 'La descripción debe tener al menos 5 caracteres'
                      }
                    }
                  )}>

                  </Textarea>
                </div>
                {
                  errors.description?  (
                    <span className="text-sm text-red-500 ml-22">{ errors.description.message }</span>
                  )
                  : <span></span>
                }
                <div className="flex items-center  ">
                  <label htmlFor="state" className="w-26">Estado:</label>
                  <select
                    className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"

                    { ...register( 'state', {
                      required: {
                        value: true,
                        message: 'Estado es requerido'
                      }

                    } ) }
                  >
                    <option value="">Seleccione...</option>
                    <option value="s1_pendiente">1. Pendiente</option>
                    <option value="s2_elaborandose">2. En Elaboración</option>
                    <option value="s3_elaborado">3. Elaborado</option>
                    <option value="s4_validandose">4. En validación</option>
                    <option value="s5_validado">5. Validado</option>
                    <option value="s6_aprobandoseOficina">6. En aprobación por Dueño de proceso</option>
                    <option value="s7_aprobadoOficina">7. Aprobado por dueño de proceso</option>
                    <option value="s8_validandoseUNOME">8. Validandose en UNOME</option>
                    <option value="s9_validadoUNOME">9. Validado por UNOME</option>
                    <option value="s10_aprobandosePRONABEC">10. En aprobación por PRONABEC</option>
                    <option value="s11_aprobandoPRONABEC">11. Aprobado por PRONABEC</option>

                    
                                     
                  </select>
                </div>
                {
                  errors.state?  (
                    <span className="text-sm text-red-500 ml-22">{ errors.state.message }</span>
                  )
                  : <span></span>
                }
                <div className="flex items-center  ">
                  <label htmlFor="ownerid" className="w-26">Dueño de proceso:</label>
                  <select
                    className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"

                    { ...register( 'ownerid', {
                      required: {
                        value: true,
                        message: 'Dueños de proceso es requerido'
                      }

                    } ) }
                  >
                    <option value="">Seleccione...</option>
                    {
                      owners.map( (owner) => (
                        
                          <option key={ owner.id } value={ owner.id }>
                            
                            { owner.nombre } { owner.apellidos } - {owner.unidadFuncional.nombre}
                            
                            </option>
                        
                      ))
                        
                    } 

                  </select>
                </div>
                {
                  errors.ownerid?  (
                    <span className="text-sm text-red-500 ml-22">{ errors.ownerid.message }</span>
                  )
                  : <span></span>
                }
                <div className="flex items-center  ">
                  <label htmlFor="managerId" className="w-26">Especialista responsable:</label>
                  <select
                    className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"

                    { ...register( 'managerId', {
                      required: {
                        value: true,
                        message: 'Especialista responsable es requerido'
                      }

                    } ) }
                  >
                    <option value="">Seleccione...</option>
                    {
                      manager.map( (manag) => (
                        
                          <option key={ manag.id } value={ manag.id }>
                            
                            { manag.user.name }
                            
                            </option>
                        
                      ))
                        
                    } 

                  </select>
                </div>
                {
                  errors.managerId?  (
                    <span className="text-sm text-red-500 ml-22">{ errors.managerId.message }</span>
                  )
                  : <span></span>
                }

                <div className="flex justify-end gap-2" >

                  <Button onClick={ () => setDialogOpen(false) } type='button' variant="secondary" >Cancelar</Button>
                  <Button onClick={ onSubmit } type='submit' variant="default" >Enviar</Button>
                </div>

              </form>
            </CardContent>
          </Card>

        </div>
      </div>



      
    </>
  );
};
