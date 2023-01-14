let arr=[1,2,3,4,5]
let sum=0
let count=0
for(let i=0;i<=5;i++){
  if(arr[i]%2==0){
    sum+=arr[i]
    count++
  }
}
console.log(sum/count)