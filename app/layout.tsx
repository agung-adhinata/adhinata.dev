import { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/molecule/Navbar";

export const metadata: Metadata = {
  title: "Adhinata DEV - Personal Website",
  description: "Personal website made by Agung Adhinata",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors">
        <div className="flex min-h-screen min-w-full flex-col items-center justify-stretch">
          <section className="flex min-h-screen w-full max-w-full flex-col md:max-w-screen-md">
            <Navbar />
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
