export const runtime = "edge";

import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Hackernews",
	description: "Hackernews... just trying ",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-background text-foreground min-h-screen w-full`}
			>
				<div className="flex w-full">
					<Sidebar />
					<main className="w-1/2">
						<div className="max-w-4xl p-4">{children}</div>
					</main>
				</div>
			</body>
		</html>
	);
}
