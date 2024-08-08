const input = [1,3,5,5,5,5,3,8,9,0];

let output = {};

input.forEach((item, i)=>{
    if(output[item]){
        output[item]++;
    } else {
        output[item] = 1;
    }
})

console.log(output);

let sum = input.reduce((acc, item)=>{
    return acc = item + acc;
},0)

console.log("Sum of elements in the array = ", sum)