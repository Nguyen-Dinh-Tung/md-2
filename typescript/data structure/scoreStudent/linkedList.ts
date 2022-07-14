import { Node } from "./node";
export class LinkedList <T> {
  head : Node <T> ;
  tail : Node <T> ;

  size : number ;

  constructor(){
    this.head = null ;
    this.tail = null ;
    this.size = 0 ;
  }
  insertFirstNode(name : string , score : number) : void {
    let node = new Node(name,score) ;
    node.next = node ;
    this.head = node ;

    if(!this.tail){
      this.tail = node ;
    }
    this.size++
  }
  insertLasteNode(name : string , score : number ) : void {

    if(!this.head){

      this.insertFirstNode(name , score) ;

    }else{

      let node = new Node(name,score) ;
      this.tail.next = node ;
      this.tail = node ;
      this.size++

    }
  }
  readList(): T[] {
    let listData = [] ;
    let currentNode = this.head ;
    while(currentNode != null){
      listData.push(currentNode.readData())
      currentNode = currentNode.next
    }
    return listData
  }
}