console.log("testing");
console.log("testing is nodemon working");

const {format}= require('date-fns');
const {v4: uuid}= require('uuid');

console.log(format(new Date(),'ddMMyyyy\tHH:mm:ss'));
console.log(uuid());