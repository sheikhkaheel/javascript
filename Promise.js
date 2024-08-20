let success = true;

function firstPromise() {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("successed");
            console.log('1st Promise')
        } else {
            reject("failer");
        }
    })
}

function secondPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("successed");
                console.log('2nd Promise')
            } else {
                reject("failer");
            }
        }, 4000)
    })
}

firstPromise()
    .then(() => {
        secondPromise();
    })

