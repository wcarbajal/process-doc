"use server";
import { signIn } from '@/auth';
import { SchemaSignin, SchemaSignup } from '@/interface/auth/auth.interface';
import { prisma } from '@/lib/prisma';
import { AuthError } from 'next-auth';
import bcrypt from 'bcryptjs';

export const loginAction = async ( values: SchemaSignin ) => {

  try {

    await signIn( 'credentials', {

      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/"

    } );
    return { success: true };

  } catch ( error ) {
    if ( error instanceof AuthError ) {
      return { error: error.cause?.err?.message };
    }
    return { error: `Error inesperado - 500 error: ${ error }` };
  }

};

export const registerAccion = async ( values: SchemaSignup ) => {

  try {

    const { email, name, password } = values;

    const user = await prisma.user.findFirst( {
      where: {
        email
      },
    } );
    if ( user ) {
      return { error: 'El usuario ya existe' };
    }

    const hashedPassword = await bcrypt.hash( password, 10 );
    await prisma.user.create( {
      data: {
        name,
        email,
        password: hashedPassword
      }
    } );
    await signIn( 'credentials', {
      email,
      password,
      redirect: false,
      
    } );
    
    return { success: true };

  } catch ( error ) {
    if ( error instanceof AuthError ) {
      return { error: error.cause?.err?.message };
    }
    return { error: `Error inesperado - 500 error: ${ error }` };
  }

};