let char=a;
let lower="abcdefghijklmnopqrstuvwxyz"
let result=false
for(let i=0;i<lower.length;i++){
  if(char==lower[i])
    result=true
  break
}
}
if(result==true){
  console.log("small char")
}else{
  console.log("not small char")
}
  