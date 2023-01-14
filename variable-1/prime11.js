function prime(num)
  { let count=0;
    for(let i=0;i<=num;i++){
      if(num%i==0){
        count++
  }
  }
if(count==2){
 return true
}else{
 return false
}
  }
for(let i=2;i<12;i++){
  let ans = prime(i)
  if(ans==true){
    console.log(i,"it is prime")
  }
  }