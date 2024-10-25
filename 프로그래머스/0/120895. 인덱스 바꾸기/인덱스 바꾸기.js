const solution = (my_string, num1, num2) => {
    let result = [...my_string];

    [result[num2], result[num1]] = [result[num1], result[num2]];

    return result.join('');
};