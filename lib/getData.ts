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

const removeDeletedItem = (item: ItemType) => {
	return item.deleted || item.dead ? null : item;
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

export const getItemsList = async (list: ListType): Promise<ItemListType> => {
	try {
		const promises = list.map(async (id: number) => {
			const item = await getItem(id);
			if (item && !item.deleted && !item.dead) {
				if (item.type === "comment" && item.kids) {
					const itemlist = await getItemsList(item.kids);
					item.comments = itemlist;
				}
				return item;
			}
			return null;
		});

		const results = await Promise.all(promises);
		return results.filter((item) => item !== null) as ItemListType;
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

export const getItemWithComments = async (
	id: number
): Promise<ItemType | null> => {
	try {
		const itemData = await getItem(id);
		if (itemData && itemData.kids) {
			const comments = await getItemsList(itemData.kids);
			itemData.comments = comments;
		}
		return itemData;
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

export const getUserWithSubmissions = async (
	id: string
): Promise<UserType | null> => {
	try {
		const userData = await getUser(id);
		if (userData && userData.submitted) {
			const submissions = await getItemsList(userData.submitted);
			userData.submissions = submissions;
		}
		return userData;
	} catch (error) {
		console.error(`Error fetching user ${id}:`, error);
		return null;
	}
};
