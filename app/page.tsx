import StoriesPage from "@/components/StoriesPage";
import { getPosts } from "@/lib/getData";
import { Suspense } from "react";
export const runtime = "edge";

export default async function Page() {
	const results = await getPosts("topstories");
	if (!results) return <p>Error</p>;
	return (
		<Suspense fallback="Loading...">
			<StoriesPage posts={results} />
		</Suspense>
	);
}
