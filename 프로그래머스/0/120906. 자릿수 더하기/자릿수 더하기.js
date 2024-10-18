const solution = (n) => {
    const result = String(n)
        .split('')
        .reduce((acc, cur) => {
            return acc + Number(cur);
        }, 0);
    
    return result;
};