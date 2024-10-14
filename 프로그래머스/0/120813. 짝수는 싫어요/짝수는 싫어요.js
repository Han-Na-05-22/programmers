const solution = (n) => {
    let array = [];

    for(let i = 0; i <= n; i++){
        if(i % 2 !== 0){
            array = [...array, i];
        };
    };

    return array;
};