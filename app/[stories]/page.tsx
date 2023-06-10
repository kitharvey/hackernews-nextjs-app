import NotFound from "@/components/NotFound";
import StoriesPage from "@/components/StoriesPage";
import { getPosts } from "@/lib/getData";
import { CategoryType } from "@/types";
import { Suspense } from "react";
export const runtime = "edge";

export default async function Page({
	params,
}: {
	params: { stories: CategoryType };
}) {
	const { stories } = params;
	const results = await getPosts(stories);
	if (!results || !results.length) return <NotFound />;
	return (
		<Suspense>
			<StoriesPage posts={results} />
		</Suspense>
	);
}
