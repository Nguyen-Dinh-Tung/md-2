import { Stack } from "./Stack";

let stack = new Stack()
let listNew = [] ;

stack.add('123')
stack.add('123')
stack.add('as')
stack.add('12xzzx3')
stack.add('cxc')
console.log(stack.list)

for(let i = stack.list.length ; i>0 ; i--){
  listNew.push(stack.remove())
}
console.log(listNew)