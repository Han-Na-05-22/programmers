const solution = (rsp) => {
    
    let result = [];
    
    [...rsp].map((r) => {
        if (r === '2') result = [...result, '0'];
        if (r === '0') result = [...result, '5'];
        if (r === '5') result = [...result, '2'];
    });
    
    return result.join('');
};
