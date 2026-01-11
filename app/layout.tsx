import { Metadata } from "next";
import "@fontsource-variable/jetbrains-mono"
import "./globals.css";
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
      <body className="min-h-screen min-w-screen transition-colors">
        <div className="absolute flex h-full w-full flex-col items-center justify-stretch overflow-auto">
          <section className="flex h-full w-full flex-col md:max-w-2xl">
            <Navbar />
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
