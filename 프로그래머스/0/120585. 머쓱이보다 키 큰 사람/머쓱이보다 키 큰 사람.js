const solution = (array, height) => {
    let result = 0;

    array.forEach((a) => {
        if (a > height) {
            result++;
        }
    });

    return result;
};
