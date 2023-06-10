import NotFound from "@/components/NotFound";
import StoriesPage from "@/components/StoriesPage";
import { getStories } from "@/lib/getData";
import { CategoryType } from "@/types";
import { Suspense } from "react";

export default async function Page({
	params,
}: {
	params: { stories: string };
}) {
	const { stories } = params;
	const story = stories == "/" ? "topstories" : stories;
	const posts = await getStories(story);
	if (!posts) return <NotFound />;
	return (
		<Suspense fallback="loading...">
			<StoriesPage posts={posts} />
		</Suspense>
	);
}
