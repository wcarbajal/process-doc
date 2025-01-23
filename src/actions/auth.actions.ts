"use server"
import { signIn } from '@/auth';
import { SchemaSignin } from '@/interface/auth/auth.interface';
import { AuthError } from 'next-auth';

export const loginAction = async(values: SchemaSignin ) => {

  try {

    await signIn('credentials', {
      
      email: values.email,
      password: values.password,
      redirect:false,
      callbackUrl: "/"
    
    })
    return {success: true}

  } catch (error) {
    if (error instanceof AuthError) {
      return {error: error.cause?.err?.message}
    }
    return {error: `Error inesperado - 500 error: ${error}`}
  }
 
}