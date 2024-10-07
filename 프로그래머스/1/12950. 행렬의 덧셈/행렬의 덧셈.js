const solution = (arr1, arr2) => {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let array = [];

        for (let j = 0; j < arr1[i].length; j++) {
            array.push(arr1[i][j] + arr2[i][j]);
        }

        result.push(array);
    }
    
    return result;
};