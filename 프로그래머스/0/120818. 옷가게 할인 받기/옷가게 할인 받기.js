const solution = (price) => {
    return Math.floor(
        price -
        ((price >= 100000 && price <= 299999
            ? 5
            : price >= 300000 && price <= 499999
                ? 10
                : price >= 500000
                ? 20
                : 0) /
            100) *
            price
    );
};
