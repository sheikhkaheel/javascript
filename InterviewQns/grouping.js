let input = [
    {
        key  : "Sample 1",
        data : "Apple"
    },
    {
        key  : "Sample 1",
        data : "Mango"
    },
    {
        key  : "Sample 2",
        data : "Banana"
    },
    {
        key  : "Sample 3",
        data : "Grapers"
    },
]

let output = {};

input.forEach((item)=>{
    if( output[item.key]){

        output[item.key].push(item.data);
    } else {
        output[item.key] = [item.data];
    }
});
console.log(output);

// 2nd approch

let outputObj = input.reduce((obj , item)=>{
    if(obj[item.key]){
        obj[item.key].push(item.data);
    } else {
        obj[item.key] = [item.data];
    }
    return obj;
},{})

console.log(outputObj);