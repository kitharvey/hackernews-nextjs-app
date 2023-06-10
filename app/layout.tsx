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
				className={`${inter.className} bg-gray-950 text-gray-50 min-h-screen w-full`}
			>
				<div className="flex w-full">
					<Sidebar />
					<main className="w-2/3">
						<div className="p-4 max-w-3xl">{children}</div>
					</main>
				</div>
			</body>
		</html>
	);
}
