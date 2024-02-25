const fs = require('fs');
function readIt(){
    fs.readFile('D:/MERN/Assignments/week-2/01-async-js/easy/demo.txt', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data.toString());
      });
}


fs.writeFile('D:/MERN/Assignments/week-2/01-async-js/easy/demo.txt', "Hi my name is godly" + '\n' ,(err) => {
    if(err){
        console.log(err);
    }
    else{
        readIt();
    }
})