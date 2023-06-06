import PostWrapper from "@/components/PostWrapper";
import { getPosts } from "@/lib/getData";
import { CategoryType } from "@/types";

export default async function Page({
	params,
}: {
	params: { stories: CategoryType };
}) {
	const { stories } = params;
	const results = await getPosts(stories);
	return <>{results && <PostWrapper posts={results} />}</>;
}
