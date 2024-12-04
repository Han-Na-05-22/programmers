function solution(num_list, n) {

    let result = [];
    let array = [];
    
    num_list.forEach((num, idx) => {
        if(idx < n){
            result.push(num);
        } else {
            array.push(num);
        }
    });
    
    return array.concat(result);
}