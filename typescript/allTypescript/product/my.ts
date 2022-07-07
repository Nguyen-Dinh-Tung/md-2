export class Product{
  name: string ;
  price: number ;
  constructor(name: string , price: number){
    this.name = name
    this.price = price
  }
  getInfoProduct(){
    return 'Name: ' + this.name + ' Price : ' + this.price
  }
  setName(name: string){
    this.name = name
  }
  setPrice(price: number){
    this.price = price
  }
}
