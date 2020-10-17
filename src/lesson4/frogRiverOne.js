// function solution(X, A) {
//     //let earliest = A.indexOf(X);
//     //console.log(earliest)
//     // if(earliest === -1 || A.length < X)
//     //     return -1;
        
//     // let tempPath = [... new Set(A.splice(0,earliest+1))];
//     // tempPath.sort((a,b) => a-b);

//     // tempPath = tempPath.slice(0,tempPath.indexOf(X)+1)
//     //console.log(tempPath)
//     // if(tempPath.length === X)
//     //     return earliest;
        
//     let leaves = {};
//     let steps = X;

//     for(i = 1; i <= X; i++){
//         leaves[i] = false;
//     }
//     //console.log(leaves);
//     let n = 0;
//     for(i=0;i<A.length;i++){
//         //console.log(leaves[A[i]]);
//         //console.log(leaves[A[i]])
//         if(leaves[A[i]] === false){
//             leaves[A[i]] = true;
//             steps--;
//             //console.log(steps);
//         }
//         if(steps === 0)
//             return i;
//     }
//     console.log(steps);
//     return -1;

//     //let next = 0;   
//     //console.log(A)
//     // while (next < A.length && tempPath.length !== X){
//     //     if(!tempPath.includes(A[next]))
//     //         tempPath.push(A[next]);
//     //     next++;
//     // }

//     // if(next === A.length && tempPath.length !== X)
//     //     return -1;
    
//     //return earliest+next;
//     //return 0;
// }

function solution(X, A) {
    let leaves = {};
    let steps = X;
    if(A.indexOf(X) === -1 || A.length< X)
        return -1

    for(i = 1; i <= X; i++){
        leaves[i] = false;
    }
    
    for(i=0;i<A.length;i++){
        if(leaves[A[i]] === false){
            leaves[A[i]] = true;
            steps--;
        }
        if(steps === 0)
            return i;
    }
    
    return -1;
}


let arr = [3,2,8,9,1,5,4,3,2,5,7,9]

console.log(solution(5,arr));