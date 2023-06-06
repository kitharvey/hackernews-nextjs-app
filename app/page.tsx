import PostWrapper from "@/components/PostWrapper";
import { getPosts } from "@/lib/getData";

export default async function Page() {
	const results = await getPosts("topstories");
	return <>{results && <PostWrapper posts={results} />}</>;
}
