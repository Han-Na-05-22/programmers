const solution = (array) => {

   return array.sort((a, b) => a - b).find((a, idx) => {
        return Math.round(array.length / 2) == idx + 1;
    });

};
