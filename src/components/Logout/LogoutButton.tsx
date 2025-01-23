'use client'
import { signOut } from 'next-auth/react';
import "@/css/style.css";

export const LogoutButton = () => {

  const handleClick = async () => {
    await signOut({
      callbackUrl: '/auth/signin'
    });
  }

  return (
    <button onClick={handleClick} className="">Cerrar session</button>
  )
}