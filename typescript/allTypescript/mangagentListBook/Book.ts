export class Book{
  id:string ;
  name: string ;
  constructor(id: string , name: string){
    this.id = id ;
    this.name = name ;
  }
  getBook(){
    return 'Name : ' + this.name + ' Id : ' + this.id
  }
  getName(){
    return 'Name : ' + this.name
  }
  setName(name:string){
    this.name = name
  }
  getId(){
    return ' Id : ' + this.id
  }
}