function solution(my_string, k) {
    let text = '';
    
   Array(k).fill(my_string).forEach((i, idx) => {
        text += i;
    });
    
    return text;
}