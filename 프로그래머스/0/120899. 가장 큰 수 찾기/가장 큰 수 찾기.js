	const solution = (array) => {
		const maxNum = Math.max(...array);

		return [maxNum, array.findIndex((a) => a === maxNum)];
	};
