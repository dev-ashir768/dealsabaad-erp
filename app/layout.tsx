import type { Metadata } from "next";
import "@/app/globals.css";
import { lato } from "./font";
import TanstackProvider from "@/tanstack/TanstackProvider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/shadcn/sonner";

export const metadata: Metadata = {
  title: "Dealsabaad",
  description: "Dealsabaad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <TanstackProvider>
          <NextTopLoader
            color="#ffe066"
            showSpinner={false}
            speed={200}
            easing="ease"
          />
          <Toaster position="bottom-right" richColors />
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
