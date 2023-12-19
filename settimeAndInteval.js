let id = setInterval(()=>{
    console.log('Kaheel');
},1000)

setTimeout(() => {
    clearInterval(id);
}, 5000);
