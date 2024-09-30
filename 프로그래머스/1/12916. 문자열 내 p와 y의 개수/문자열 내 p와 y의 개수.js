function solution(s){

    const textCount = {
        pCount: [...s].filter((p) => p.toUpperCase() === 'P')?.length || 0,
        yCount: [...s].filter((y) => y.toUpperCase() === 'Y')?.length || 0,
    };

    console.log('textCount',textCount);
    
    return ((textCount.pCount === 0 && textCount.yCount === 0) || textCount.pCount === textCount.yCount)
}