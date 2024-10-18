const solution = (my_string) => {
    let set = new Set([...my_string]);
    let result = [...set];
    return result.join("")
};