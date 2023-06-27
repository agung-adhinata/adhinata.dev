import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
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
