function selection(arr){
  for( let i = 0 ; i < arr.length ; i++){
    let cMax = arr[i] ;
    let cIndex = i
    for(let j = i + 1 ; j< arr.length ; j++){
      if(cMax < arr[j]){
        cMax = arr[j]
        cIndex = j
      }
    }
    if(cIndex != i){
      arr[cIndex] = arr[i] ;
      arr[i] = cMax
    }
  }
  console.log(arr)
}
let arr2 = [2,3,5,2,2,3,3,333,452,566] ;
selection(arr2)