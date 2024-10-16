const solution = (my_string) => {
    let result = 0;

    [...my_string].map((string) => {
        typeof Number(string) === 'number' && !isNaN(string)
            ? (result = result + Number(string))
            : '';
    });

    return result;
};
