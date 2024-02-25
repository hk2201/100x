/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
function cal(milliseconds){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return resolve("You can go ahead Thread now")
        },milliseconds);
    })
}
async function sleep(milliseconds) {
    return await cal(milliseconds).then((message) => {
        console.log(message);
    }).catch((error)=>{
        console.log(error);
    })
}


module.exports = sleep;
