import { readFile } from 'node:fs';

readFile('./files/start.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
//OR 
readFile('./files/start.txt','utf8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// readFile is an Asynchronous function

//Exit on UnCaught Errors
process.on('uncaughtException',err => {
    console.error(`There was an UnHandled Exception Occured : ${err}`)
    process.exit(1)
});