function solution(my_string, is_prefix) {
    
    const result = my_string.slice(0, is_prefix.length) === is_prefix;
    
    return result ? 1 : 0;
}