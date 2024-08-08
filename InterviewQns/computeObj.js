let input = {
    A: (a,b,c)=> a+b+c,
    B: (a,b,c)=> a-b-c,
    C: (a,b,c)=> a*b*c
}

function compute(a,b,c){
    let keys = Object.keys(input)
    let output = {}
    for(let i = 0; i < keys.length; i++){
        let key = keys[i];
        output[key] = input[key](a,b,c)
    }
    return output;
}

let result = compute(1,2,4);
console.log(result);
