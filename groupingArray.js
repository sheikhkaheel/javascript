const arrayObj = [
    {
        key: "Sample 1",
        data: "Apple"
    },
    {
        key: "Sample 1",
        data: "Mongo"
    },
    {
        key: "Sample 2",
        data: "Banana"
    },
    {
        key: "Sample 1",
        data: "Grapes"
    },
    {
        key: "Sample 3",
        data: "Orange"
    },
]

// let obj = {};

// arrayObj.forEach((item)=>{
//     if(obj[item.key]){   
//         obj[item.key].push(item)
//     } else {
//         obj[item.key] = [item];
//     }
// })
// console.log(obj)

let groupArray = arrayObj.reduce((arr, val) => {  // here it takes two args  both symbolises the elements of array
    if (arr[val.key]) {                           // here it checks the condition if key already exists then do following...
        arr[val.key].push(val.data)               // here it push the data of the obj of same key in a array with name as obj key
    } else {
        arr[val.key] = [val.data]                 // here it store the obj data in a array with name as obj key
    }
    return arr                                    // here it returns the arr which is an obj of arrays
}, {});                                           // here it initialises the obj as empty

console.log(groupArray)




let listOfFruits = ["apple","mango","grapes","apple","banana","mango","apple","grapes","banana"];
let orderList = listOfFruits.reduce((acc, item)=>{
    if(acc[item]){
        acc[item]++;
    } else {
        acc[item] = 1;
    }
    return acc;
},[])

console.log(orderList);