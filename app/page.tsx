import StoriesPage from "@/components/StoriesPage";
import { getPosts } from "@/lib/getData";

export default async function Page() {
	const results = await getPosts("topstories");
	return <>{results && <StoriesPage posts={results} />}</>;
}
