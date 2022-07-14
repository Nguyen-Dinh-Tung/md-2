export class Node <T> {

  name : string ;
  score : number ;

  next : Node <T> ;

  constructor(name : string , score : number){
    this.name = name ;
    this.score = score ;
  }
  readData(): any{
    return 'Name : ' + this.name + " Score : " +this.score
  }

}