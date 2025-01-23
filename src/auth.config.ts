
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { SchemaSignin } from './interface/auth/auth.interface';
import { prisma } from './lib/prisma';
import bcrypt from "bcryptjs";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Credentials( {

      credentials: {
        email: { type: 'string', },
        password: {type: 'string'},
      },
      authorize: async ( credentials ) => {

        const user = await prisma.user.findUnique( {
          where: {
            email: credentials.email as string,
          },
        } );
        if ( !user || ! user.password) {
          throw new Error( 'Invalid credentials' );
        }
        // Verificar contraseñas
        const isValid = await bcrypt.compare( credentials.password as string, user.password );

        if ( !isValid ) {
          throw new Error( 'Invalid credentials - c' );
        }




        const { password, ...rest } = user;
        return rest;
      },
    } ),
  ],
} satisfies NextAuthConfig;