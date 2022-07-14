import { List } from './linkedList';
let list = new List() ;

list.addFristNode('Tung' , 8)
list.addFristNode('Tung' , 5)
list.addFristNode('Tung' , 2)
list.addFristNode('Phich' , 9)

console.log(list.readList())

console.log(list.totalStudentsFail())