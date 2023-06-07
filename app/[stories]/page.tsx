import NotFound from "@/components/NotFound";
import StoriesPage from "@/components/StoriesPage";
import { getPosts } from "@/lib/getData";
import { CategoryType } from "@/types";

export default async function Page({
	params,
}: {
	params: { stories: CategoryType };
}) {
	const { stories } = params;
	const results = await getPosts(stories);
	return (
		<>
			{results && results.length ? (
				<StoriesPage posts={results} />
			) : (
				<NotFound />
			)}
		</>
	);
}
