function solution(n) {
    
    let arrayNumber = String(n).split('');

    let result = Array(arrayNumber.length).fill().map((_, idx) => arrayNumber[idx]).sort((a,b)=> b - a);
    
    return Number(result.join(''), 10);
}