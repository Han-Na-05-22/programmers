function solution(arr) {
    
     let minValue = Math.min(...arr);
    
     const result = arr.filter((i)=> i !== minValue);
     
     return result.length === 0 ? [-1] : result;
}