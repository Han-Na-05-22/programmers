	const solution = (x, n) => {
		let array = [];

		for(let i = 1; i <= n; i++){
			array = [...array, x * i];
		}

		return array;
	};
