var expect = function(val){
    return {
        toBe: (num)=>{
            if(num === val) {
                return true;
            } 
            throw new Error("Not Equal");
        },
        notToBe : (num)=>{
            if(num !== val) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
}

// let result = expect(5).toBe(5);
let result = expect(5).toBe(null);
// let result = expect(5).notToBe(null);
console.log(result);