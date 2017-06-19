var n = 5;
var s1 = 1;
var s2 = 1;

for(var i=0;i<=n;i++){
  if(i==0 || i==1){
    s = 1;
  }
  else{
  s = s1 + s2;
  s1 = s2;
  s2 = s;
  }

}
  console.log(s);
