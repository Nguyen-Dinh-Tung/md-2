import { getTime } from "../class/Constant";
import { TransfersHistory } from "../class/TransfersHistory";

export class History {
  private listHistoryCustomer : TransfersHistory []  = [] ;
  private listHistoryAdmin : TransfersHistory []  = [] ;


  setTransfersHistory(nameTransfers: string, nameTake : string  , money : number){
    let newHistory = new TransfersHistory(nameTransfers, nameTake , money , getTime()) ;
    this.listHistoryCustomer.push(newHistory)
    this.listHistoryAdmin.push(newHistory)
  }
  setTransferAdmin(nameTransfers: string, nameTake : string  , money : number){
    let newHistory = new TransfersHistory(nameTransfers, nameTake , money , getTime()) ;
    this.listHistoryAdmin.push(newHistory)
  }


  getListHistoryCustomer(userLogin : string){
    let messageHistory : TransfersHistory[] = [] ;
    this.listHistoryAdmin.forEach(element => {
      if(element.getName() ==  userLogin || element.getNameTake() ==  userLogin){
        messageHistory.push(element)
      }

    });
    return messageHistory ;
  }
  getlistHistoryCustomer(){
    return this.listHistoryCustomer
  }
  getListlistHistoryAdmin(){
    return this.listHistoryAdmin
  }
}

export let history = new History()