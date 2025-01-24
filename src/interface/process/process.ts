export interface Process {
    codigo: string;
    nombre: string;
    tipo: string;
    descripcion: string;
    fechaCreacion: string;
    fechaActualizacion: string;
    estado: string;  
}

export interface Mapa {
  nombre: string;
  entrada: string;
  salida: string;
}