function findBinary(data : number[] , needle : number){
  let left = 0 ;
  let right = data.length - 1;
  let result = -1 ;

  while(left <= right){
    let mid = Math.floor((left + right) / 2)
    if(needle == data[mid]){
       result = mid ;
    }else if(data[mid] > needle){
      right = mid - 1 ;
    }else {
      left = mid + 1
    }
  }
  return result
}

let data = [1,2,3,5,55,77,1001]
let needle = 3 ;

console.log(findBinary(data,needle))