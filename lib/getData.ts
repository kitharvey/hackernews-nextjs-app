import { ItemType, ListType, CategoryType } from "@/types";

const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

const noCacheFetch = async (url: string) => {
	return fetch(url, { cache: "no-store" }).then((response) => response.json());
};

// client fetch
export const getItem = async (id: number): Promise<ItemType | null> => {
	const url = `${BASE_URL}item/${id}.json`;
	const response = await noCacheFetch(url);
	return response;
};
// server fetch
export const getStories = async (category: CategoryType): Promise<ListType> => {
	const url = `${BASE_URL}${category}.json`;
	try {
		const response = await noCacheFetch(url);
		return response;
	} catch (error) {
		console.error("Error fetching stories:", error);
		return [];
	}
};
