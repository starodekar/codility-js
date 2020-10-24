function solution(N, A) {
    let counters=Array(N).fill(0);
    max = 0;
    //counters[0] = 10;
    //counters = Array(N).fill(Math.max.apply(Math,counters))
    //for(i = 1; i <= N; i++){
    //    counters[i] = 0;
    //}
    //console.log(counters)
    for(i=0;i<A.length;i++){
        if(1<=A[i]<=N){
            counters[A[i]-1]++;
            if(max<counters[A[i]-1])
                max = counters[A[i]-1]
        }
        else
            counters = Array(N).fill(max)

        console.log(max)
    }
    //console.log(counters);
    return counters;
}

console.log(solution(5,[3,4,4,6,1,4,4]))


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    let counters=Array(N).fill(0);
    //counters[0] = 10;
    //counters = Array(N).fill(Math.max.apply(Math,counters))
    //for(i = 1; i <= N; i++){
    //    counters[i] = 0;
    //}
    
    for(i=0;i<A.length;i++){
        if(A[i]<=N)
            counters[A[i]-1]++;
        else
        counters = Array(N).fill(Math.max.apply(Math,counters))
    }
    //console.log(counters);
    return counters;
}