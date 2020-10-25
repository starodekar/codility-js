
function solution(A){
    A.sort((a,b) => a-b);
    const len = A.length;
    let maxProduct = A[len-1]*A[len-2]*A[len-3];
    let tempMax = 0;

    if(Math.sign(A[0]) === -1 && Math.sign(A[1]) === -1)
        tempMax = A[0]*A[1]*A[len-1]
    
    return tempMax > maxProduct ? tempMax : maxProduct
}

//const answer = solution([-3,1,2,-5,5,6]);
//console.log(answer);