	function solution(num_list) {

		let odd = 0 ;
		let even = 0;
		
		num_list.map((num, idx) => {
			if(idx % 2 === 0){
				even = even + num;
			} else {
				odd = odd + num;
			}
		});

		return odd > even ? odd : even;
	
	}