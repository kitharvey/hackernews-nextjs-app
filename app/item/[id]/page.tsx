import ItemPage from "@/components/ItemPage";
import NotFound from "@/components/NotFound";
import { getItemWithComments } from "@/lib/getData";
import { Suspense } from "react";
export const runtime = "edge";

export default async function Page({ params }: { params: { id: number } }) {
	const { id } = params;
	const data = await getItemWithComments(id);
	if (!data) return <NotFound />;
	return (
		<Suspense>
			<ItemPage item={data} />
		</Suspense>
	);
}
