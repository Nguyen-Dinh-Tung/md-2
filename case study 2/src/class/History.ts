import { getTime } from "../extra/getTime";

export class History {
  sender : string ;
  receiver : string ;
  amountOfMoney : number ;
  time : any ;
  constructor(sender : string , receiver : string ,amountOfMoney : number){
    this.sender = sender ;
    this.receiver = receiver ;
    this.amountOfMoney = amountOfMoney ;
    this.time = getTime() ;
  }
  getSender(): string {
    return this.sender ;
  }
  getReceiver(): string {
    return this.receiver ;
  }
}
