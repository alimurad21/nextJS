import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

export const metadata: Metadata = {
  title: "Book Store",
  description: "Book store will show details of available books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter">
        <div id="__next" className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
