function solution(A) {
    const len = A.length;
    if(len === 0)
    return 1;
    
    const sum = A.reduce((a,b) => a+b)
    const expectedSum = (len+1)*(len+2)/2
    
    return expectedSum - sum;
}