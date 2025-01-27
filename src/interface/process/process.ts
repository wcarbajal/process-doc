import { State, TypeProcess } from '@prisma/client';

export interface Process {
  id: string;
  code: string;
  name: string;
  type: TypeProcess;
  createdAt: Date;
  updatedAt: Date | null;
  description: string;
  level: string;
  state: State;
  ownerid: string;
  managerId: string | null;
  mapaId: string | null; 
}

export interface Mapa {
  name: string;
  id: string;
  input: string;
  output: string;
}


