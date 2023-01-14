let detail={
  data=[]

   addstudent :function (name,ph,ch,ma){
  let obj={};
  obj.name=name,
    obj.ph=ph,
  obj.ch=ch,
    obj.ma=ma

  this.data.push(obj)
  }
}
detail.addstudent("luffy",2,4,6)
detail.addstudent("goku",3,5,6)