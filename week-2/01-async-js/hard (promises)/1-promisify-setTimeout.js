/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function cal(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved after ' + n + ' milliseconds');
        }, n*1000);
    });
}

async function wait(n) {
    return await cal(n).then((message) => {
        console.log(message); // This will log the resolved message
    }).catch((error) => {
        console.error(error); // This will log any errors that occur during the promise execution
    });
}


module.exports = wait;
