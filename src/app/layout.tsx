import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz-It",
  description: "Your own quiz AI bot!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen pt-16")} 
      style={{ backgroundColor: "#fff8f3" }}
      >
        <Providers>
          <Navbar />
          {children}
          <Toaster />
        </Providers>
      </body>
      <footer className="font-bold font-size 1rem text-black text-base flex-center mt-4 md:mt-0 text-center astro-SZ7XMLTE"> 
      <Link
        className="ml-1 underline"
        href="https://github.com/AnushDubey/Quiz-It"
      >
        GitHub 
      </Link>
      <br></br>
       © 2023 Anush Dubey. All rights reserved.
      </footer>
    </html>
  );
}
