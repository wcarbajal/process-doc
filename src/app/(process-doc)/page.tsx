import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { LogoutButton } from '@/components';


export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default async function Home() {

  const session = await auth();

  if ( !session ) {

    redirect( '/auth/signin' );


  }
  return (
    <>
      <DefaultLayout >
        
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
