function solution(phone_number) {
    
    let text = phone_number.substring(0, phone_number.length - 4);
    
    return phone_number.replace(text, "*".repeat(text.length));
}