function solution(my_string, index_list) {
    
    let text = '';
    
    index_list.forEach((t, idx) => {

        text += my_string.charAt(t);
    });
    
    return text;
    
}