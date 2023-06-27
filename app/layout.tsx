import { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
	title: "Adhinata DEV - Personal Website",
	description: "Presonal website made by Agung Adhinata",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="transition-colors">{children}</body>
		</html>
	);
}
