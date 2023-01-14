//prime from 1 to 23

for(let i=1;i<=23;i++){
  let bag=i
  let count=0
  for(let j=1;j<=23;j++){
    if(i%j==0){
      count++
    }
  }
  if(count==2){
  console.log(i,"prime")
  }else{
  console.log(i,"not prime")
}
}