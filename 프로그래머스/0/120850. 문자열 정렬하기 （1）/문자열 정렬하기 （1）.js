const solution = (my_string) => {
    let result = [];
    [...my_string].forEach((string) => {
        if (!isNaN(Number(string))) {
            result = [...result, Number(string)];
        }
    });
    return result.sort((a, b) => a - b);
};