import Post from "@/components/Post";
import { getPosts } from "@/lib/getData";

export default async function Home() {
	const results = await getPosts("topstories");
	return (
		<div>
			<ul>
				{results &&
					results.map(
						(item) =>
							item && (
								<Post
									key={item.id}
									item={item}
								/>
							)
					)}
			</ul>
		</div>
	);
}
