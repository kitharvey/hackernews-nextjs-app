import StoriesPage from "@/components/StoriesPage";
import { getStories } from "@/lib/getData";
import { Suspense } from "react";

export default async function Page() {
	const stories = await getStories("topstories");
	return (
		<Suspense fallback="loading">
			<StoriesPage posts={stories} />
		</Suspense>
	);
}
