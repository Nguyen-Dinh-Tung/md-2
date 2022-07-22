import { PRICEELECTRIC } from "./Constant";
import Customer from "./Customer";

export class ElectricBill{
  public listBill : any = [] ;
  constructor(){
  }

  showListBill(){
    console.table(this.listBill)
  }

  addBillCustomer(customer: Customer , oldElectricNumber : number , newElectricNumber : number ){
    let infoBillCustomer = this.addInfoCustomer(customer, oldElectricNumber, newElectricNumber) ;
    this.listBill.push(infoBillCustomer)
  }

  private addInfoCustomer(customer: Customer, oldElectricNumber: number, newElectricNumber: number) {
    return {
      name: customer.name,
      numberHouse: customer.numberHouse,
      houseCode: customer.houseCode,
      oldElectricNumber: oldElectricNumber,
      newElectricNumber: newElectricNumber,
      numberElectricUsed: this.handleUsedElectric(newElectricNumber , oldElectricNumber)
    };
  }

  deleteCustomer(index: number){
    this.listBill.splice(index,1)
  }

  editCustomer(index: number , customer : Customer){
    this.listBill[index].name = customer.name ;
    this.listBill[index].numberHouse = customer.numberHouse ;
    this.listBill[index].houseCode = customer.houseCode ;

  }

  payElectric(index: number){
    let moneyMustPay
    = this.listBill[index].numberElectricUsed * PRICEELECTRIC ;
    console.table(moneyMustPay) ;
  }

  updateNewNumberElectric(index: number,number : number){
    let flag = false ;
      if(number > this.listBill[index].newElectricNumber ){

        this.listBill[index].oldElectricNumber = this.listBill[index].newElectricNumber ;

        this.listBill[index].newElectricNumber = number ;

      this.listBill[index].numberElectricUsed =
      this.listBill[index].newElectricNumber - this.listBill[index].oldElectricNumber;
      flag = true ;
      }
    return flag ;
  }

  handleUsedElectric(newElectricNumber: number ,oldElectricNumber : number ): number{

    let numberElectricUsed = 0 ;
    if(newElectricNumber != 0){
      numberElectricUsed = newElectricNumber - oldElectricNumber
    }else{
      newElectricNumber = 0 ;
    }
    return numberElectricUsed
  }
}