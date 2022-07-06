// var
let arr: number[] = [0,1]
let n:number = 10;
let finbonaci:number = 0;
let total:number = 0 ;
// find finbonaci
function findFinbonaci(n:number,arr){
  for(let i = 0 ; i <n ; i++){
    finbonaci =  arr[i] + arr[i+1]
    arr.push(finbonaci)
  }
}
findFinbonaci(n,arr)
// sum
function sum(total:number , arr):number{
  for(let value of arr){
    total += value
  }
  return total
}
console.log(sum(total,arr))