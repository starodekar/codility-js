function solution(A, B, K) {
        
    //const diff = B-A+1;
    //let arr = Array.from(Array(diff),(_,index)=> index+A);
    if(K==1) return B-A+1;
    
    let start = 0;

    if(A%K == 0) start = A;
    else start = K * (Math.floor(A/K)+1);
    //console.log(start);
    if(start>B) return 0;
    //if(start == B) return 1;

    let count = 0;

    while (start<=B){
        start += K;
        count++;
    }

    // for(i=A;i<=B;i++){
    //     if(i%K === 0)
    //         count++;
    // }

    // for(i of arr){
    //     if(i%K === 0)
    //         count++;
    // }
    return count;

    //console.log(diff);
    //console.log(arr);
}

console.log(solution(7,10,5))