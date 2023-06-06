import ItemPage from "@/components/ItemPage";
import { getItemWithComments } from "@/lib/getData";

export default async function Page({ params }: { params: { id: number } }) {
	const { id } = params;
	const data = await getItemWithComments(id);
	if (data) {
		return <ItemPage item={data} />;
	}
}
