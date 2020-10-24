function solution(A) {
    let count = 0;
    
    let zeroCount = 0;
    
    for(i in A){
        if(A[i] == 0)
            zeroCount++
        else
            count += zeroCount
    }
    if(count > 1000000000)
        return -1;
    
    return count;
}


// [2,3,1,2]
// 8+6+3+2
// 2+6+3+8
console.log(solution([1,1]))