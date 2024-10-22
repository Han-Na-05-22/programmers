const solution = (rny_string) => {
    let result = [];

    [...rny_string].forEach((string) => {
        if (string === 'm') {
            result.push('rn');
        } else {
            result.push(string);
        }
    });
    
    return result.join('');
};