	const solution = (absolutes, signs) => {
		let num = 0;

		absolutes.map((a, idx) => {
			if(signs[idx]){
				num += a;
			} else {
				num -= a;
			}
		});
        
        return num;

	};