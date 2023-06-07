import NotFound from "@/components/NotFound";
import UserPage from "@/components/UserPage";
import { getUserWithSubmissions } from "@/lib/getData";
export const runtime = "edge";

export default async function Page({ params }: { params: { userid: string } }) {
	const { userid } = params;
	const userData = await getUserWithSubmissions(userid);
	return <>{userData ? <UserPage user={userData} /> : <NotFound />}</>;
}
