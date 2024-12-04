function solution(numbers) {
    let result = numbers.sort((a, b) => b - a);
    
    return result[0] * result[1];

}