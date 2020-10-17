
function solution(A, K) {
    const len = A.length;   //length of array A
    const rotation = K % len;   //number of rotations required
    
    if(rotation === 0)
        return A;
    
    let finalArray = [];
    
    for(i=0;i<len;i++){
        //finding index of element to be pushed
        let index = (len-rotation+i)%len;
        finalArray.push(A[index]);
    }
    return finalArray;
    //console.log("rotations required : "+rotation);
}