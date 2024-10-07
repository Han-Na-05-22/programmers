const solution = (price, money, count) => {
    let cost =
        Array(count)
            .fill(price)
            .reduce((acc, curr, idx) => acc + curr * (idx + 1), 0) - money;

    return cost >= 0 ? cost : 0;
};