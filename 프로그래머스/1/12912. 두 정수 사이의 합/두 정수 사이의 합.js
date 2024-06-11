function solution(a, b) {
    
    let sum = 0;
    
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    
    for(start; start <= end; start++){
        sum += start;
    };
    
    return sum;
}