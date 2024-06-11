function solution(arr)
{
    const newArray = arr.filter((value, index, array) => value !== array[index - 1] );

    return newArray;
}