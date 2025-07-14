const http=require('http');

const PORT = 3000;

const server = http.createServer((req,res)=>{
  res.write("HI HEllo FRom Node JS")
  res.end()

});

server.listen(PORT,(err)=>{
  if(err) console,log(err)
    else console.log(`Server is Running SuccessFully on Port ${PORT}`)
  })