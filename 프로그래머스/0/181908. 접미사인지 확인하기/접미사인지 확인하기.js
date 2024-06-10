function solution(my_string, is_suffix) {
    const result = my_string.slice(my_string.length - is_suffix.length) === is_suffix;

    return result ? 1 : 0;
}