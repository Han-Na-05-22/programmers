function solution(n) {
    
    let text = '';
  
    Array(n).fill().forEach((_, idx) => text += idx % 2 === 0 ? '수' : '박');
    
    return text;
    
}
