const solution = (myString) => {
    return myString
        .split('x')
        .filter((string) => string)
        .sort();
};