import { UnidadFuncional } from '@prisma/client';
import bcrypt from 'bcryptjs';


interface SeedManager {
  userId: string;
  
}


interface SeedData {
  manager: SeedManager[];
}

export const incialData: SeedData = {

  manager: [
    {
      userId: 'cm6eejwbx0000cmu4yngfh6xc',
    },
    {
      userId: 'cm6eejwbx0001cmu4i3dwqsc2',
    },
  ],
};


