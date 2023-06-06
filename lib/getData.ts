import {
	ItemType,
	ListType,
	ItemListType,
	CategoryType,
	UserType,
} from "@/types";

const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

const noCacheFetch = async (url: string): Promise<Response> => {
	return fetch(url, { cache: "force-cache" });
};

export const getStories = async (category: CategoryType): Promise<ListType> => {
	const url = `${BASE_URL}${category}.json`;
	try {
		const response = await noCacheFetch(url);
		return response.json();
	} catch (error) {
		console.error("Error fetching stories:", error);
		return [];
	}
};

export const getItem = async (id: number): Promise<ItemType | null> => {
	const url = `${BASE_URL}item/${id}.json`;
	try {
		const response = await noCacheFetch(url);
		return response.json();
	} catch (error) {
		console.error(`Error fetching item ${id}:`, error);
		return null;
	}
};
export const getUser = async (id: string): Promise<UserType | null> => {
	const url = `${BASE_URL}user/${id}.json`;
	try {
		const response = await noCacheFetch(url);
		return response.json();
	} catch (error) {
		console.error(`Error fetching item ${id}:`, error);
		return null;
	}
};

export const getItemsList = async (list: ListType): Promise<ItemListType> => {
	try {
		const promises = list.map((id: number) => getItem(id));
		return Promise.all(promises);
	} catch (error) {
		console.error("Error fetching items:", error);
		return [];
	}
};

export const getPosts = async (
	category: CategoryType
): Promise<ItemListType> => {
	try {
		const postIds = await getStories(category);
		return getItemsList(postIds);
	} catch (error) {
		console.error("Error fetching posts:", error);
		return [];
	}
};

export const getComments = async (list: ListType): Promise<ItemListType> => {
	try {
		const commentsList = await getItemsList(list);
		const promises: Promise<void>[] = [];

		commentsList.forEach((comment) => {
			if (comment && comment.kids) {
				const promise = getComments(comment.kids).then((itemlist) => {
					comment.comments = itemlist;
				});
				promises.push(promise);
			}
		});

		await Promise.all(promises);
		return commentsList;
	} catch (error) {
		console.error("Error fetching comments:", error);
		return [];
	}
};

export const getItemWithComments = async (
	id: number
): Promise<ItemType | null> => {
	try {
		const itemData = await getItem(id);
		if (itemData?.kids) {
			const comments = await Promise.all([getComments(itemData.kids)]);
			itemData.comments = comments[0];
		}
		return itemData;
	} catch (error) {
		console.error(`Error fetching item ${id}:`, error);
		return null;
	}
};
