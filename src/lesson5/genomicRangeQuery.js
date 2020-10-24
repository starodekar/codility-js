function solution(S, P, Q) {
    let str = S;
    
    const genome = {
        'A':1,
        'C':2,
        'G':3,
        'T':4
    };
    
    if(S.length==1){
        return Array(P.length).fill(genome[S]);
    }
    
    let result = []
    let substr = '';
    
    for(i in P){
        substr = str.substring(P[i],Q[i]+1)
        if(substr.includes('A'))
            result[i] = 1;
        else if(substr.includes('C'))
            result[i] = 2;
        else if(substr.includes('G'))
            result[i] = 3;
        else
            result[i] = 4;

        substr = '';
    }
    return result;
}

console.log(solution('CAGCCTA',[2,5,0],[4,5,6]))