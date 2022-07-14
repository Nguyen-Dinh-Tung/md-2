import { IQueue } from "./isQueue";
class Queue <T> implements IQueue<T> {

  private storge: T[] = [] ;

  constructor(private capacity : number = Infinity){}
  enqueue(item: T): void {
    if(this.capacity === this.size()){}
    else {
      this.storge.push(item)
    }
  }
  dequeue(): T {
    return this.storge.shift() ;
  }
  size(): number {
    return this.storge.length ;
  }


}