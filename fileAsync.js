import fs from 'fs'
import os from 'os'
//1
// fs.writeFile('note.txt', 'Hello world, welcome to Node.js!', (err)=>{if (err) throw err; console.log("File written sucessfully")})
// fs.stat("note.txt", (err, stats)=>{if (err) console.log("Error getting stats"); console.log("Size: ", stats.size, "create at: ", stats.birthtime);
// })

//2
// fs.readdir(".",(err, data)=> {if (err) throw err; console.log("Files in logs:", data);
// });
// fs.lstat("note.txt",(err, stats)=> {if (err) throw err; console.log("is file:", stats.isFile())})

//3
// let count = [5,4,3,2,1,0,"Time's up!"]
// setTimeout(()=> {
//     for (){
//         console.log(count[i]);
// }},
//     500)

//4
// fs.writeFile('quotes.txt', 'Stay positive. \nKeep learning.\nJavaScript is fun!!', (err)=>{if (err) throw err; console.log("File written sucessfully")})
// fs.readFile("quotes.txt", "utf8", (err, data)=> {if (err) throw err; console.log("Content:",data);}
// )

//5
// let memory = ((os.freemem()/os.totalmem())*100)%10^10
// setInterval(()=> {for (let i=0; i<=5; i++){console.log("Free Memory: ", memory,"%");
// }},200)
// clearInterval(memory)
