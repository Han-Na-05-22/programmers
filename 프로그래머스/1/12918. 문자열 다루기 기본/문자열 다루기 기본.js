function solution(s) {
    let array = s.split('');

    return (s.length === 4 || s.length === 6) && array.filter((i) => !isNaN(i)).length === array.length;
}