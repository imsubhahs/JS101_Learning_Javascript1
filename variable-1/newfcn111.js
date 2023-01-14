function convert(char){
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lower="abcdefghijklmnopqrstuvwxyz"
  for(let i=0;i<upper.length;i++){
    if(char==upper[i]){
     return lower[i]
  }
  }
  return char
}
console.log(convert(n))