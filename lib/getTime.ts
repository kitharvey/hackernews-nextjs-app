export const getTimePassed = (unixTimestamp: number): string => {
	const currentTimestamp: number = Math.floor(Date.now() / 1000);
	const secondsElapsed: number = currentTimestamp - unixTimestamp;

	const minute: number = 60;
	const hour: number = minute * 60;
	const day: number = hour * 24;
	const month: number = day * 30;
	const year: number = day * 365;

	if (secondsElapsed < minute) {
		return "Just now";
	} else if (secondsElapsed < hour) {
		const minutes: number = Math.floor(secondsElapsed / minute);
		return minutes === 1 ? "a minute ago" : `${minutes} minutes ago`;
	} else if (secondsElapsed < day) {
		const hours: number = Math.floor(secondsElapsed / hour);
		return hours === 1 ? "an hour ago" : `${hours} hours ago`;
	} else if (secondsElapsed < month) {
		const days: number = Math.floor(secondsElapsed / day);
		return days === 1 ? "a day ago" : `${days} days ago`;
	} else if (secondsElapsed < year) {
		const months: number = Math.floor(secondsElapsed / month);
		return months === 1 ? "a month ago" : `${months} months ago`;
	} else {
		const years: number = Math.floor(secondsElapsed / year);
		return years === 1 ? "a year ago" : `${years} years ago`;
	}
};
