import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';
import { MapaProcesos } from '../../../components/MapaProcesos/MapaProcesos';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


export default function Process() {
  return (
    <DefaultLayout >
      <div className="flex gap-2">


        <div className="border w-1/4 h-[85vh]">
          <div className="flex">
            
            <Input />

            <Button> Send</Button>


          </div>
          
          <div>
            Lista de Procesos
            <ul>
              <li>P1</li>
              <li>P2</li>
              <li>P3</li>
              <li>P4</li>
              <li>P5</li>
            </ul>
          </div>



        </div>

        <div className="border w-3/4 h-[85vh]">
          <div>
            Resumen o detalles del proceso
          </div>

          <div>
            Imagen de proceso
          </div>
        </div>



      </div>

    </DefaultLayout>

  );
}
