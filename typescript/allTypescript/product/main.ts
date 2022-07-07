import {Product} from './my'
import {Listproduct} from './listproduct'
let a = new Product('Iphone ' , 20000)
let b = new Product('laptop' , 2002020)
let listproduct = new Listproduct()
listproduct.setAddProduct(a)
listproduct.setAddProduct(b)
console.log(listproduct.getAll())