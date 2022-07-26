export class TransfersHistory {

  private name : string ;
  private nameTake : string ;
  private amountMoney : number ;
  private date : string ;

  constructor(name : string , nameTake : string , amountMoney : number , date : string){
    this.name = name ;
    this.nameTake = nameTake ;
    this.amountMoney = amountMoney ;
    this.date = date ;
  }
  getHistory(){
    return {
      name: this.name ,
      money : this.amountMoney,
      date : this.date,
    }
  }
  getName(){
    return this.name ;
  }
  getNameTake(){
    return this.nameTake;
  }
}