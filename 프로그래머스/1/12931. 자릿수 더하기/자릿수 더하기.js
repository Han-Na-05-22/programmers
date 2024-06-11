function solution(n)
{
    let array = String(n).split('');
    let count = 0;
    
    array.forEach((i) => {
        count += Number(i);
    });
    
    return count;
}