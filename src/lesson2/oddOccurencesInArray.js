// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    A.sort();
    odd = 0;
    for(i=0;i<A.length;i++){
        odd ^= A[i]
    }
    console.log(odd);
    // let unique = [... new Set(A)]
    // let uniqueCount = []
    // let count = 0;
    // for(i=0;i<unique.length;i++){
    //     let count = A.filter(num => num === unique[i]);
    //     if(count.length%2 !== 0){
    //         console.log(unique[i]);
    //         break;
    //     }
    //     //count++;
    //         //return unique[i]
    //     //uniqueCount.push(count.length);
    // }
    //console.log(count);
    // let value = uniqueCount.filter(num => num%2)[0];
    // let index = uniqueCount.indexOf(value)
    // let result = unique[index];
    //console.log(uniqueCount);
    //console.log(index);
    //console.log(result);
    //return result;
}

// var arr = Array(100001).fill(1);
// arr[0]=3;

arr = [9,3,9,7,3,9,9];

var t0 = new Date();

solution(arr);

var t1 = new Date();
console.log("solution took " + (t1 - t0) + " milliseconds.")