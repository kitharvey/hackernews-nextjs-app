import ItemPage from "@/components/ItemPage";
import NotFound from "@/components/NotFound";
import { getItemWithComments } from "@/lib/getData";
export const runtime = "edge";

export default async function Page({ params }: { params: { id: number } }) {
	const { id } = params;
	const data = await getItemWithComments(id);
	return <>{data ? <ItemPage item={data} /> : <NotFound />}</>;
}
