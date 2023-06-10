import UserPage from "@/components/UserPage";
import { getUser } from "@/lib/getData";
import { Suspense } from "react";

export default async function Page({ params }: { params: { userid: string } }) {
	const { userid } = params;
	const userData = await getUser(userid);
	if (!userData) return <p>Error</p>;
	return (
		<Suspense fallback="loading">
			<UserPage user={userData} />
		</Suspense>
	);
}
