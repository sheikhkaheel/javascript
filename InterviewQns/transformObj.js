let inputObj = {
    a : 1,
    b : {
        c : 2
    } ,
    d : {
        e : {
            f : 3
        }
    }
}

// outputObj = {
//     a : 1,
//     b_c : 2,
//     d_e_f : 3
// }


let outputObj = {}
for (let key in inputObj){
    if (typeof inputObj[key] === 'object'){
        // console.log(inputObj[key]);
        let Tkey = inputObj[key]
        for(let nxtKey in Tkey){
            if(typeof Tkey[nxtKey] === 'object'){
                // console.log(Tkey[nxtKey]);
                let Zkey = Tkey[nxtKey]
                for(let k in Zkey ){
                    if(typeof Zkey[k] !== 'object'){
                        outputObj[key + "_" + nxtKey + "_" + k] = Zkey[k];
                    }
                }
            } else {
                outputObj[key + "_" + nxtKey] = Tkey[nxtKey]
            }
        }
    } else {
        outputObj[key] = inputObj[key];
    }
}

console.log(outputObj);

// console.log(Object.entries(inputObj))
