// import { readFile } from 'node:fs';

const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'start.txt'), (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
//OR 
fs.readFile('./files/start.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

fs.writeFile(path.join(__dirname, 'files', 'first.txt'), 'Hi This is the First text File created by Node Js', (err) => {
  if (err) throw err;
  console.log('Write Completed');
});

fs.appendFile(path.join(__dirname, 'files', 'first.txt'), '\n\n Thank YOU', (err) => {
  if (err) throw err;
  console.log('Append Completed');
});

fs.rename(path.join(__dirname, 'files', 'first.txt'), path.join(__dirname, 'files', 'testingRename.txt'), (err) => {
  if (err) throw err;
  console.log('Rename Completed');
});

// readFile is an Asynchronous function

//Exit on UnCaught Errors
process.on('uncaughtException', err => {
  console.error(`There was an UnHandled Exception Occured : ${err}`)
  process.exit(1)
});