import { ArrayList } from "./arrlist";
interface Post{
  tilte: string ;
}
let arr = new ArrayList<Post>();

arr.add({tilte : 'Tung Phich'})
arr.add({tilte : 'Thanh Hoa'})
arr.add({tilte : 'Hai phong'})

console.log(arr)