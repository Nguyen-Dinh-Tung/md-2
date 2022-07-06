class Book{
  title: string;
  author: string ;
  alreadyRead: boolean ;
  constructor(title:string , author: string , check: boolean){
    this.title = title ;
    this.author = author ;
    this.alreadyRead = check ;
  }
}
let a = new Book('Đắc nhân tâm' , 'Dale Carnegie' , true)
let b = new Book('Thiên tài bên trái , kẻ điên bên phải' , 'Người điên' , false)
let c = new Book('Luyện tư duy logic' , 'Giấu tên' , true)
let listBook: Book[] = []
listBook.push(a)
listBook.push(b)
listBook.push(c)
function render(book:Book){
  console.log(book)
}
listBook.forEach(render)