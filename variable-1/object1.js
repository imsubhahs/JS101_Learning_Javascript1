let str="subhash";

let obj={};

for(let i=0;i<str.length;i++){
  let key=str[i];
if(obj[key]==undefined){
obj[key]=1;
} 
  else{
obj[key]++;
}
}
console.log(obj);