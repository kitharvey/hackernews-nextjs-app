import StoriesPage from "@/components/StoriesPage";
import StoriesPageLoader from "@/components/StoriesPageLoader";
import { getStories } from "@/lib/getData";
import { Suspense } from "react";

export default async function Page() {
	const stories = await getStories("topstories");
	return (
		<Suspense fallback={<StoriesPageLoader />}>
			<StoriesPage posts={stories} />
		</Suspense>
	);
}
