export class Listproduct{
  private listProducts = [] ;
  constructor(){

  }
  getAll(){
    return this.listProducts
  }
  setAddProduct(product){
    this.listProducts.push(product)
  }
}