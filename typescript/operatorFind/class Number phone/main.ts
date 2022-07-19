enum Viettel{
  value = '0977',
  value2 = '0971',
  value3 = '0883',
}
let arr : string [] = ['088388887' , '0971800103' , '0977719684','09719292929','088327277272'] ;
let arr0977 = [] ;
let arr0971 = [] ;
let arr0883 = [] ;

for(let i = 0 ; i < arr.length ; i ++){
let numberFirt = '';
  for(let j = 0 ; j < 4 ; j ++){
    numberFirt += arr[i][j]
  }
  if(Viettel.value == numberFirt){
    arr0977.push(arr[i])
  }else if(Viettel.value2 == numberFirt){
    arr0971.push(arr[i])
  }else if(Viettel.value3 == numberFirt){
    arr0883.push(arr[i])
  }
}
console.log(arr0977)
console.log(arr0971)
console.log(arr0883)
