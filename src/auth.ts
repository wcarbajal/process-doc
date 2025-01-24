import NextAuth from "next-auth";
//import { PrismaAdapter } from '@auth/prisma-adapter';
//import { prisma } from './lib/prisma';
import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth( {
  //adapter: PrismaAdapter( prisma ),  
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24
  },

  ...authConfig,
  callbacks: {
    jwt( { token, user } ) {
      if ( user ) { // User is available during sign-in
        token.role = user.role;
      }
      return token;
    },
    session( { session, token } ) {
      session.user.role = token.role;
      return session;
    },
  },
}


 );