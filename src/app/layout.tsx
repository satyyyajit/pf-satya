// This is a layout.tsx file in a Next.js application.

import { Toaster } from "sonner";
import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
    subsets: ["latin"],
    variable: "--font-inter",
  });
  
  const jetbrainsMono = JetBrains_Mono({ 
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
  });

export const metadata: Metadata = {
  title: "Satyajit - Portfolio",
  description: "Satyajit Panda's Portfolio",
  
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white min-h-screen flex flex-col justify-center items-center`}
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar/>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
