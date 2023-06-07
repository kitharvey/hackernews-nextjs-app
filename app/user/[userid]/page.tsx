import UserPage from "@/components/UserPage";
import { getUserWithSubmissions } from "@/lib/getData";

export default async function Page({ params }: { params: { userid: string } }) {
	const { userid } = params;
	const userData = await getUserWithSubmissions(userid);
	if (userData) return <UserPage user={userData} />;
}
