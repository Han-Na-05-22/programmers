function solution(my_string) {
    
    let result = my_string.toLowerCase();
    
    return [...result].sort().join('');
    
}