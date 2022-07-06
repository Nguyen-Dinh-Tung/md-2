let arr:number[] = [] ;
for(let i = 0 ; i<10 ; i++){
  arr.push(i)
}
let number:number = +prompt('Nhập số')
// console.log(arr)
// find element
function find (number:number):number{
  let index:number = arr.indexOf(number)
  while(index == -1){
    return number
    index++
  }
  return -1
}
// push element
function pushElement(number:number , arr){
  if(number != -1){
    arr.push(number)
  }
}
pushElement(find(number),arr)
console.log(arr)