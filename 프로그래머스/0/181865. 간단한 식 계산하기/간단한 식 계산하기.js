const solution = (binomial) => {
    const [first, op, sec] = binomial.split(' ');

    let num1 = Number(first);
    let num2 = Number(sec);

    if (op === '+') {
        return num1 + num2;
    } else if (op === '-') {
        return num1 - num2;
    } else {
        return num1 * num2;
    }
};