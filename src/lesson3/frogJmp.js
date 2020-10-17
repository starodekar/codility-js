function solution(X, Y, D) {
    let diff = Y-X;
    
    let jumps = Math.ceil(diff/D);
    return jumps;
}