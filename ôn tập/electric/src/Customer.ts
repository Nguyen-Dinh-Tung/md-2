export default class Customer {

  public name : string ;
  public numberHouse : string ;
  public houseCode : string ;

  constructor(  name : string ,
                numberHouse : string ,
                houseCode : string){

    this.name = name ;
    this.numberHouse = numberHouse ;
    this.houseCode = houseCode ;

  }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getNumberHouse(): string {
        return this.numberHouse;
    }

    public setNumberHouse(numberHouse: string) {
        this.numberHouse = numberHouse;
    }

    public getHouseCode(): string {
        return this.houseCode;
    }

    public setHouseCode(houseCode: string) {
        this.houseCode = houseCode;
    }


}