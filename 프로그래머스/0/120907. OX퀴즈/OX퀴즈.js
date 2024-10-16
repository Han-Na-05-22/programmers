const solution = (quiz) => {
    return quiz.map((q) => {
        const [left, operator, right, , result] = q.split(' ');

        const calculate =
            operator === '-'
                ? Number(left) - Number(right)
                : Number(left) + Number(right);

        return calculate === Number(result) ? 'O' : 'X';
    });
};