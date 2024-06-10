function solution(start, end_num) {
    
    let array = [];
    
   Array(start + 1).fill().forEach((i, idx) => {
        if(idx >= end_num){
            array = [...array, idx]
        }
    });

    return array.sort((a,b)=> b - a);
}