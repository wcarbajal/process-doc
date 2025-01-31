'use client'
import { getNameProcess } from '@/actions/process/process';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


export const ViewProcess = () => {

  const [nombre, setNombre] = useState('')

  const route = usePathname();
  const lastSegment = route.split('/').filter(Boolean).pop();
  
  useEffect(() => {
    const fetchData = async () => {
      const nombreProcess = await getNameProcess(lastSegment!);
      setNombre(nombreProcess);
    };
    fetchData();
  }, [lastSegment])
  

  return (
    <p className="my-2 p-2">{nombre}</p>
  )
}