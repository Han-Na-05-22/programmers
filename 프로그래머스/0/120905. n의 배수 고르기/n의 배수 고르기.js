const solution = (n, numlist) => {
    let result = [];

    numlist.forEach((num) => {
        num % n === 0 && result.push(num);
    });

    return result;
};