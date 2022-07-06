import {Book} from './Book'
class List {
  listBook:Array<Book> = []
  constructor(book:Book){

    this.listBook.push(book)
  }
  getInfoList(){
    return this.listBook
  }
  addBook(book:Book){
    this.listBook.push(book)
  }
  deleteBook(id:string){
    let bookId = this.findBookById(id)
    this.listBook.splice(1,1)
  }
  updateBook(id:string , name:string){
    for(let i = 0 ; i<this.listBook.length ; i++){
      this.listBook[id].name = name
      this.listBook[id].id = id
    }
  }
  findBookById(id:any){
    let i = -1
    this.listBook.forEach((item)=>{
      if(item.id === id)
      i = id
    })
    return i
  }
}
let book = new Book('1','ABC')
let book2 = new Book('2','check')

let list = new List(book)
list.addBook(book2)
list.deleteBook('1')
console.log(list)