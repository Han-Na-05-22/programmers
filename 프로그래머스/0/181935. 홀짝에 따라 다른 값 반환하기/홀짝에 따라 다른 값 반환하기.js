const solution = (n) => {
    let num = 0;

    for (let i = 1; i <= n; i++) {
        if (n % 2 === 0 && i % 2 === 0) {
            num += i * i;
        };

        if (n % 2 !== 0 && i % 2 !== 0) {
            num += i;
        };
    };

    return num;
};
