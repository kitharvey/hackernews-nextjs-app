import ItemPage from "@/components/ItemPage";
import { getItem } from "@/lib/getData";

export default async function Page({ params }: { params: { id: number } }) {
	const { id } = params;
	const data = await getItem(id);
	if (!data) return <p>Error</p>;
	return <ItemPage item={data} />;
}
