import NotFound from "@/components/NotFound";
import UserPage from "@/components/UserPage";
import { getUserWithSubmissions } from "@/lib/getData";
import { Suspense } from "react";
export const runtime = "edge";

export default async function Page({ params }: { params: { userid: string } }) {
	const { userid } = params;
	const userData = await getUserWithSubmissions(userid);
	return (
		<Suspense fallback="Loading...">
			{userData ? <UserPage user={userData} /> : <NotFound />}
		</Suspense>
	);
}
