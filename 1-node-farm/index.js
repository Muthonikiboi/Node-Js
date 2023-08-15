const fs=require('fs'); //require-loads modules in node js,fs-provides a set of functions for working file system
/*
const hello='Hello world';
console.log(hello);
*/

//SYNCHRONOUS METHOD
//read a file Nodejs
const data=fs.readFileSync('/home/zaki-dev/Desktop/SKILL PAGE/Jonas/complete-node-bootcamp-master/1-node-farm/starter/txt/input.txt','utf8');
console.log(data);

//write a file in Node
const writingFile=`what we know about fruit is: ${data}.File created on ${Date.now()}`;
fs.writeFileSync('/home/zaki-dev/Desktop/SKILL PAGE/Jonas/complete-node-bootcamp-master/1-node-farm/starter/txt/output.txt',writingFile);
console.log('New file has been written');

//ASYNCHRONOUS METHOD
fs.readFile('/home/zaki-dev/Desktop/SKILL PAGE/Jonas/complete-node-bootcamp-master/1-node-farm/starter/txt/start.txt','utf-8',(err,data1)=>{
    console.log(data);
    fs.readFile('/home/zaki-dev/Desktop/SKILL PAGE/Jonas/complete-node-bootcamp-master/1-node/farm/starter/txt/${data1}.txt','utf-8',(err,data2)=>{
        console.log(data2);
        fs.readFile('/home/zaki-dev/Desktop/SKILL PAGE/Jonas/complete-node-bootcamp-master/1-node-farm/starter/txt/append.txt','utf-8',(err,data3)=>{
            console.log(data3);

            fs.writeFile('/home/zaki-dev/Desktop/SKILL PAGE/Jonas/complete-node-bootcamp-master/1-node-farm/starter/txt/final.txt',`${data3} \n ${data3}`,'utf-8',err=>{
                console.log('Your file has been written');
            })
        })
    })
})
console.log('will read file');