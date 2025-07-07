// import { readFile } from 'node:fs';

const fs = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf8');
    console.log(data);
    await fs.writeFile(path.join(__dirname, 'files', 'first.txt'),
      'Hi This is the First text File created by Node Js',
      console.log('Write Completed'));

    await fs.appendFile(path.join(__dirname, 'files', 'first.txt'), '\n\n Thank YOU',
      console.log('Append Completed'));

    fs.rename(path.join(__dirname, 'files', 'first.txt'), path.join(__dirname, 'files', 'testingRename.txt'),
      console.log('Rename Completed'));

      fs.unlink(path.join(__dirname, 'files', 'start.txt'));

  } catch (err) {
    console.error(err);
  }
}

fileOps();

// readFile is an Asynchronous function

//Exit on UnCaught Errors
process.on('uncaughtException', err => {
  console.error(`There was an UnHandled Exception Occured : ${err}`)
  process.exit(1)
});