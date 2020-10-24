function solution(A) {
    let minAvg = (A[0]+A[1])/2;
    
    let minIndex = 0;
    for(i=0;i<A.length-2;i++){
        let avg1 = (A[i]+A[i+1])/2
        let avg2 = (A[i]+A[i+1]+A[i+2])/3
        
        if(avg1< minAvg){
            minAvg = avg1
            minIndex = i;
        }

        if(avg2< minAvg){
            minAvg = avg2
            minIndex = i;
        }
        //console.log(avg1,avg2, minAvg, minIndex);
    }

    if((A[A.length-1]+A[A.length-2])/2 < minAvg)
        minIndex = A.length - 2;
    
    return minIndex;
}

console.log(solution([4,2,2,5,1,5,8]))