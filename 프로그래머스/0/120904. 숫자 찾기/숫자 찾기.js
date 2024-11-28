function solution(num, k) {
    return [...String(num)].findIndex((n) => n == k) + 1 || -1;
}