function solution(A) {
    let leftSum = A[0];
    console.log(leftSum);
    let rightSum = A.reduce((a,b) => a+b) - A[0];
    console.log(rightSum);
    let diff = Math.abs(leftSum - rightSum);
    console.log(diff);
    for(i=1;i<A.length-1;i++){
        leftSum += A[i];
        rightSum -= A[i];
        diff = Math.min(diff,Math.abs(leftSum - rightSum));
    }
    return diff;
}

let arr = [-1,1,2,3];

console.log(solution(arr));  