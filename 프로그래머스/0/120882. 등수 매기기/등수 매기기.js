const solution = (score) => {
    const avgArray = score.map((s) => (s[0] + s[1]) / 2).sort((a, b) => b - a);

    return score
        .map((s) => (s[0] + s[1]) / 2)
        .map((a) => avgArray.indexOf(a) + 1);
};