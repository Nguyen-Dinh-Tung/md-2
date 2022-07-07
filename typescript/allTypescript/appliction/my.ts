class Aplication{
  private name: string ;
  static count: number = 0 ;
  //
  constructor(name:string){
    this.name = name ;
    Aplication.count++ ;
  }
}

let a = new Aplication('Tung');
console.log(Aplication.count);
let b = new Aplication('Tung1');
console.log(Aplication.count);
