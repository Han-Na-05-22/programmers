function solution(todo_list, finished) {
    const result = todo_list.filter((todo, idx)=> !finished[idx]);
    
    return result;
}