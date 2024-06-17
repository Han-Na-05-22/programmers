function solution(A,B){
    let sum = 0;
    let firstArray = A.sort((a, b) => a - b);
    let secArray = B.sort((a, b) => b - a);
    
    for(let i = 0; i < firstArray.length; i++) {

        let count = (firstArray[i] * secArray[i]);
    
        sum = sum + count;
    };

    return sum;

}