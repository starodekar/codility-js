// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    let binary = N.toString(2);
    let indexOfOne = [];
    let binaryGap = [];
    
    for(i=0;i<binary.length;i++){
        let index = binary.indexOf(1,i);
        if (index != -1 && !indexOfOne.includes(index))
            indexOfOne.push(index);
    }
    
    if(indexOfOne.length === 1)
        return 0;
    
    for(i=1;i<indexOfOne.length;i++){
        binaryGap.push(indexOfOne[i]-indexOfOne[i-1])
    }
    
    answer = Math.max.apply(Math, binaryGap)-1;
    
    //console.log(binary);
    //console.log(indexOfOne);
    //console.log(answer);
    return answer;
}