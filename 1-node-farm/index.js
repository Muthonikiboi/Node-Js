const fs=require('fs'); //require-loads modules in node js,fs-provides a set of functions for working file system
/*
const hello='Hello world';
console.log(hello);
*/

//read a file Nodejs
const data=fs.readFileSync('/home/zaki-dev/Desktop/SKILL PAGE/Jonas/complete-node-bootcamp-master/1-node-farm/starter/txt/input.txt','utf8');
console.log(data);

//write a file in Node
const writingFile=`what we know about avocados is: ${data}.File created on ${Date.now()}`;
fs.writeFileSync('/home/zaki-dev/Desktop/SKILL PAGE/Jonas/complete-node-bootcamp-master/1-node-farm/starter/txt/output.txt',writingFile);
console.log('New file has been written');

