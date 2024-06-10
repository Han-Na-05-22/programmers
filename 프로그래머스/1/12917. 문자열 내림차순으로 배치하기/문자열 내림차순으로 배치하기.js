function solution(s) {

    let array = s.split('');

    const result = array.sort((a, b) => {
        if(a < b){
          return 1;
        }

        if(a > b){
          return -1;
        }

        return 0
    });

    return result.join('');
}