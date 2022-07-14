import { Node } from "./node";
export class List<T> {

  head : Node <T> | null;

  tail : Node <T> | null;

  size : number ;

  constructor(){
    this.head = null ;
    this.tail = null ;

    this.size = 0 ;
  }

  addFristNode(name : string , score : number){
    let node = new Node(name,score)
    node.next = this.head ;
    this.head = node ;
    if(!this.tail){
      this.tail = node ;
    }
    this.size++
  }
  addLastNode(name : string , score : number){
    if(!this.head){
      this.addFristNode(name,score)
    }{
      let node = new Node(name,score) ;
      this.tail.next = node ;
      this.tail = node ;
      this.size++ ;
    }
  }
  readList(){
    let List = [] ;
    let currentNode = this.head ;
    while(currentNode !== null ){
      List.push(currentNode.readData())
      currentNode = currentNode.next ;
    }
    return List
  }
  findScore(){
    let listScore = [] ;
    this.readList().forEach((element)=>{
      listScore.push(element.score)
    })
    return listScore
  }
  totalStudentsFail(): number{
    let flag = 0 ;
    this.findScore().forEach((element)=>{
      if(element > 5){
        flag++
        return
      }
    })
    return flag ;
  }
  listStudentMaxScore():number{
    let flag = 0 ;
    this.findScore().forEach((element)=>{
      if(element <= 5){
        flag++
        return
      }
    })
    return flag ;
  }

  findNameByLinkedList(): string []{
    let listName = [] ;
    this.readList().forEach((element)=>{
      listName.push(element.name)
    })
    return listName ;
  }
  findName(name: string): string []{
    let listName = [] ;
    this.findNameByLinkedList().forEach((element) =>{
      if(element == name){
        listName.push(element) ;
      }
    })
    return listName;
  }

}