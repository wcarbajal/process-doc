"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState, useTransition } from "react";
import Loader from "@/components/common/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition()

  // const pathname = usePathname();

  useEffect(() => {
    startTransition(() => {
      setLoading(true);
    });
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {isPending ? <Loader /> : children}
        </div>
      </body>
    </html>
  );
}
