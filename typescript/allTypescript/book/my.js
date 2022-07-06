var Book = /** @class */ (function () {
    function Book(title, author, check) {
        this.title = title;
        this.author = author;
        this.alreadyRead = check;
    }
    return Book;
}());
var a = new Book('Đắc nhân tâm', 'Dale Carnegie', true);
var b = new Book('Thiên tài bên trái , kẻ điên bên phải', 'Người điên', false);
var c = new Book('Luyện tư duy logic', 'Giấu tên', true);
var listBook = [];
listBook.push(a);
listBook.push(b);
listBook.push(c);
function render(book) {
    console.log(book);
}
listBook.forEach(render);
