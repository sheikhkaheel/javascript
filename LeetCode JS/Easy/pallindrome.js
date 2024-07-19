var isPallidrome = function (val){
    let rev = 0, digit;
    while(val){
        digit = val % 10;
        rev = rev * 10 + digit;
        val = parseInt(val / 10);
    }
    if(rev < 0){
        rev = (rev - 2 * rev) + "-";
    }
    return rev;
}

// let result = isPallidrome(121);
// let result = isPallidrome(10);
let result = isPallidrome(-101);
console.log(result);