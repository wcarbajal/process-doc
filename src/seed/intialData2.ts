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
      userId: 'cm6f5tmww0000ht10i8e8by86',
    },
    {
      userId: 'cm6f5tmww0001ht10ho5d03dq',
    },
  ],
};


