export type CategoryType =
	| "topstories"
	| "newstories"
	| "beststories"
	| "askstories"
	| "showstories"
	| "jobstories";
export type ItemTypeType = "job" | "story" | "comment" | "poll" | "pollopt";

export type ListType = number[];

export type ItemListType = (ItemType | null)[];

export type UserType = {
	about: string;
	created: number;
	delay: number;
	id: string;
	karma: number;
	submitted: number[];
	submissions: ItemListType;
};

export type ItemType = {
	comment: Promise<ItemListType>;
	id: number;
	deleted: boolean;
	type: ItemTypeType;
	by: string;
	time: number;
	text: string;
	dead: boolean;
	parent: number;
	poll: number;
	kids: number[];
	url: string;
	score: number;
	title: string;
	parts: number[];
	descendants: number;
	comments: ItemListType;
};
