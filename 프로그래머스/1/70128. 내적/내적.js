
	const solution = (a, b) => {
		let num = 0;

		a.map((i, idx) => (num += i * b[idx]));

		return num;
	};