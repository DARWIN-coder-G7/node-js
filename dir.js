const fs = require('fs');
if(fs.existsSync('./new')){
fs.rmdir('./new',(err)=>{
    if(err) throw err;
    console.log("Directory Deleted Succesfully");
})
}else{
    fs.mkdir('./new',(err)=>{
    if(err) throw err;
    console.log("Directory Created Succesfully");
})
}
//Exit on UnCaught Errors
process.on('uncaughtException', err => {
  console.error(`There was an UnHandled Exception Occured : ${err}`)
  process.exit(1)
});