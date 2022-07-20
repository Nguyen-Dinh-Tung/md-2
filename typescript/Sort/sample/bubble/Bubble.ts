export class Bubble{
  static numbers : number [] = [2,3,52,3,2,3,563,4,65]
  public static bubbleSort(list: number []): void{
    let needNextPass : boolean = true ;
    for(let k = 1 ; k < list.length ; k++){
      needNextPass = false ;
      for(let i = 0 ; i < list.length - k ; i ++){
        if(list[i]>list[i+1]){
          console.log("swap " + list[i] + ' width ' + list[i + 1])
          let temp = list[i] ;
          list[i] = list[i+1] ;
          list[i+1] = temp ;

          needNextPass = true ;
        }
      }
      if (needNextPass == false) {
        console.log("Array may be sorted and next pass not needed");
        break;
    }
    console.log("List after the  " + k + "' sort: ");
    for (let j = 0; j < list.length; j++) {
        console.log(list[j] + "\t");
    }
    console.log();

    }
  }
}