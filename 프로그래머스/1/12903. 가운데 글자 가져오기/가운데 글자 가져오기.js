function solution(s) {

    let textLength = Math.round(s.length / 2);
    let isOdd = s.length % 2 !== 0;

    return s.slice(textLength - 1, isOdd ? textLength : textLength + 1);
}