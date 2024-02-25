function myTime() {
    const dt = new Date(); 
    console.log(dt.toLocaleTimeString());
}

setInterval(myTime, 1000);
