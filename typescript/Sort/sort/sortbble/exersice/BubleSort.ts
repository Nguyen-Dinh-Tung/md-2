export class BubbleSort{

  sort(arr: number []){
    for(let i = 0 ; i < arr.length ; i ++){
      for(let j = i ; j > 0 ; j--){
        if(arr[j] < arr[j - 1]){
          let temp = arr[j] ;
          arr[j] = arr[j - 1] ;
          arr[j-1] = temp
        }
      }
    }
    console.log(arr)
  }
}