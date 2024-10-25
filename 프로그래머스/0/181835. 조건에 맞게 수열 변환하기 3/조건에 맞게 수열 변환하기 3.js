const solution = (arr, k) => {
    let result = [];

    arr.forEach((a) => {
        result.push(k % 2 !== 0 ? a * k : a + k);
    });

    return result;
};