let obj = {
    name : "kaheel",
    subjectMarks : {
        eng: 23,
        maths:54,
        science:40,
        urdu:20,
        sst:45
    },
    rollno:20
}

let anotherObj = {};

for(let key in obj){
    if(typeof obj[key] == 'object'){
        anotherObj[key] = {...obj[key]};
    } else {
        anotherObj[key] = obj[key]
    }
}

anotherObj.subjectMarks.maths = 50;
anotherObj.name = "muhammad";

console.log(anotherObj ,obj);