const fs = require("fs");

let str;

fs.readFile("D:/MERN/Assignments/week-2/01-async-js/medium/demo.txt", (err,data)=>{
    if(err){
        console.log(err);
    }
    str = data.toString();

    str = str.split(/\s+/g).join(' ');
    str = str.trim();
    console.log(str);
    

    fs.writeFile("D:/MERN/Assignments/week-2/01-async-js/medium/demo.txt",str,(err)=>{
        if(err){
            console.log(err);
            return;
        }
    
        console.log("Completed");
    })
})

