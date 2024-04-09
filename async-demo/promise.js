
const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        // resolve(JSON.stringify({ id : 1,name : "Roman Reigns"}))
        reject(new Error('Promise rejected'))
    },2000)
})

promise
    .then(result => console.log('Result',result))
    .catch(error => console.log('Error',error.message))