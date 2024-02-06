import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Community Rides",
  description: "Ride hosting built by community for the people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-cyan-550 bg-[-25%_60%]`}
        style={{
          backgroundImage:
            "url(/bg-pattern-top.svg), url(/bg-pattern-bottom.svg)",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </body>
    </html>
  );
}
