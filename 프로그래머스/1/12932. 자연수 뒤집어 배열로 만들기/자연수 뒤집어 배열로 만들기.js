function solution(n) {
    let array = String(n).split('').reverse();

    const result = array.map((i) => Number(i));
    
    return result;

}