Array.prototype.customReduce = function ( fnCb, initialVal ) {
    const arr = this;
    let accumilator = initialVal !== undefined ? initialVal : arr[0];
    for(let i = initialVal !== undefined ? 0 : 1 ; i < arr.length; i++) {
        accumilator = fnCb( accumilator, arr[i] , i, arr)
    }
    return accumilator;
}

let result = [1,2,3].customReduce((acc,item)=>{
    // console.log(acc,item);
    return item + acc;

},0)

console.log("This is the result",result);

