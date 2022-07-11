import { Square } from "./square";
let list = [];
list[0] = new Square (24 , 'Blue') ;
list[1] = new Square (33 , 'red') ;
list[2] = new Square (52 , 'yellow') ;
list[3] = new Square (77 , 'green') ;

console.log(list[0].howToColor())