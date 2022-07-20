function selection(arr){
  for(let i = 1 ; i < arr.length ; i++){
    let cMin = arr[i] ;
    let cIndex = i ;
    for(let j = i + 1 ; j<arr.length ; j++){
      if(cMin>arr[j]){
        cMin = arr[j] ;
        cIndex = j ;
      }
    }
    if(cIndex != i){
      arr[cIndex] = arr[i] ;
      arr[i] = cMin;
    }
  }
  console.log(arr)
}
let arr = [2,3,5,2,2,3,3,333,452,566] ;
selection(arr)