function solution(ingredient) {
    let count = 0;
    
    const result = ingredient.reduce((acc, cur) => {
        acc.push(cur);

        if (acc.slice(-4).join('') === '1231') {
            acc.splice(-4);  
            count++;
        };
        
        return acc;
    }, []);

    return count; 
}