import NotFound from "@/components/NotFound";
import StoriesPage from "@/components/StoriesPage";
import StoriesPageLoader from "@/components/StoriesPageLoader";
import { getStories } from "@/lib/getData";
import { CategoryType } from "@/types";
import { Suspense } from "react";

export default async function Page({
	params,
}: {
	params: { stories: CategoryType };
}) {
	const { stories } = params;
	const story = stories ? stories : "topstories";
	const posts = await getStories(story);
	if (!posts) return <NotFound />;
	return (
		<Suspense fallback={<StoriesPageLoader />}>
			<StoriesPage posts={posts} />
		</Suspense>
	);
}
