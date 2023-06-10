const CommentLoader = () => {
	const widths = [40, 44, 48, 52, 56, 60, 64, 72, 80];
	function getRandomWidth(min: number, max: number) {
		return Math.floor(Math.random() * (max - min) + min);
	}
	const randomWidth =
		widths[getRandomWidth(0, widths.length - 1)] * 0.25 + "rem";
	return (
		<div className="pt-8 max-w-full animate-pulse grid gap-2">
			<div className="flex gap-2">
				<div className="h-3 w-16 bg-gray-500 rounded" />
				<div className="h-3 w-16 bg-gray-500 rounded" />
			</div>
			<div
				className="h-4 w-full bg-gray-50 rounded"
				style={{ width: randomWidth }}
			/>
		</div>
	);
};

export default CommentLoader;
