function solution(seoul) {
    
    const findKimOfSeoul = (name) => {
        return name === 'Kim';
    }
    
    const result = seoul.findIndex(findKimOfSeoul);
    
    return `김서방은 ${result}에 있다`;
}