function solution(people, limit) {
    
    people.sort((a, b) => a - b);
    
    let count = 0;
    let light = 0;
    let heavy = people.length - 1;

    while (light <= heavy){
        if(people[light] + people[heavy] <= limit){
            light++;
        };
        
        heavy--;
        count++;
    };

    return count;
};