let n = 5 ;
let de_n = 0 ;
try{
  if(de_n == 0 ){
    throw 'Divide by zero error'
  }else{
    let sol = n/de_n
  }
}
catch(e){
  console.log('Error ' + e)
}
try{
  ab()
}
catch(e){
  console.log(e.name)
}