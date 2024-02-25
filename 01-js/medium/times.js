/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const s = new Date();
    let before = s.getTime();
    let ans = 0;
    for(let i = 0 ; i <= n ; i++){
        ans += i;
    }
    const ss = new Date();
    let after = ss.getTime();
    console.log(after - before);
    return after - before;
    // return 0.01;
}

calculateTime(10000000);