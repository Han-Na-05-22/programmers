	const solution = (start_num, end_num) => {
		let array = [];
		for (let i = 0; i <= end_num - start_num; i++) {
			array = [...array, start_num + i];
		}
        
        return array;
	};
