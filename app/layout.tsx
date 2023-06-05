import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Twickernews",
	description: "Hackernews but like twitter",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-background text-foreground`}>
				<main className="min-h-screen max-w-3xl px-10 mx-auto">{children}</main>
			</body>
		</html>
	);
}
