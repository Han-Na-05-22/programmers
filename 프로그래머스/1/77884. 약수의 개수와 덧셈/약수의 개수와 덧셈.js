const solution = (left, right) => {
    let totalCount;
    let resultNum = 0;

    for (let i = left; i <= right; i++) {
        totalCount = 1;

        for (let j = 0; j < i; j++) {
            if (i % j === 0) {
                totalCount++;
            }

            if (j === i) {
                return totalCount;
            }
        }

        if (totalCount % 2 === 0) {
            resultNum = resultNum + i;
        } else {
            resultNum = resultNum - i;
        }
    }
    
    return resultNum;
};
