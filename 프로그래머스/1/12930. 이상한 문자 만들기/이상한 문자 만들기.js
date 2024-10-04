const solution = (s) => {
	
	let index = 0;
	const result = [...s].map((m) => {
	
		if (m === ' ') {
			index = 0;
            return m;
		} else {
			index++;
            return index % 2 === 0 ? m.toLowerCase() : m.toUpperCase();
		}
	});
	
	return result.join(''); 
};