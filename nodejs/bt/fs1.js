// var http = require('http');
// var prompt = require('prompt');
// http.createServer(function(req,res){
let n = 10;
var s1 = 1;
var s2 = 1;
console.log(s1+ " "+ s2);
function fibo(n){
  for(var i=0;i<=n;i++){
    if(i==0 || i==1){
      s = 1;
    }
    else{
    s = s1 + s2;
    s1 = s2;
    s2 = s;
    console.log(s2);
    }

  }
return  s ;
}
// res.writeHead(300,{'Content-Type':'text/plain'});
// res.write("Ket qua la " + fibo(n));
// res.end();
// }).listen(3000);
console.log('ket qua '+fibo(n));
