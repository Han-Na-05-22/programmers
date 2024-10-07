	const solution = (numbers) => {
		const array = numbers.sort((a, b) => a - b);

		let num = 0;
		let idx = 0;

		for (let i = 0; i < 10; i++) {
			if (array[idx] !== i) {
				num += i;
			} else {
				idx++;
			}
		}

		return num;
	};