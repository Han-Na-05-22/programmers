function solution(arr, flag) {
    let result = [];
    
    arr.map((a, idx) => {
        if(flag[idx]){
            result.push(...new Array(arr[idx] * 2).fill(arr[idx]));
        } else {
            result.splice(result.length - a, a);
        }
    })
    
    return result;
}