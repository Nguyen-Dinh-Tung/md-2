let arr = [2,3,2,3,25,6,3,5,6,34] ;

function selection(arr){
  for(let i = 0 ; i< arr.length ; i ++){
    let currentMin = arr[i] ;
    let currentMinIndex = i ;
    for(let j = i + 1 ; j < arr.length ; j++ ){
      if(currentMin> arr[j]){
        currentMin = arr[j] ;
        currentMinIndex = j ;
      }
    }
    if (currentMinIndex != i) {
      arr[currentMinIndex] = arr[i];
      arr[i] = currentMin;
  }
  }
}
console.log(selection(arr))