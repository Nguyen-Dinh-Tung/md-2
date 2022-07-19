function find(arr : number [] , number : number){
  for(let i = 0 ; i < arr.length ; i++){
    if(number == arr[i]){
      console.log('Số cần tìm tồn tại trong mảng')
    }
  }
}
let arr = [1,2,3,5,3,56,3] ;
let number = 2 ;
find(arr,number) ;