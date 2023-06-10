import ItemPage from "@/components/ItemPage";
import ItemPageLoader from "@/components/ItemPageLoader";
import NotFound from "@/components/NotFound";
import { getItem } from "@/lib/getData";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: number } }) {
	const { id } = params;
	const data = await getItem(id);
	if (!data) return <NotFound />;
	return (
		<Suspense fallback={<ItemPageLoader />}>
			<ItemPage item={data} />
		</Suspense>
	);
}
