export class Triangle {
  flag : number ;
  message : string ;

  constructor(){
    this.flag = 0 ;
    this.message = '';
  }

  isTriangle(edgeFirst : number,edgeNext : number, edgeLast : number){

    this.randomTriangle(edgeFirst,edgeNext,edgeLast)

    this.equilateralTriangle(edgeFirst,edgeNext,edgeLast)

    this.isoscelesTriangle(edgeFirst,edgeNext,edgeLast)

    this.rightTriangle(edgeFirst,edgeNext,edgeLast)


    switch(this.flag){
        case 0:
        this.message =  'Không phải tam giác'
        break ;
        case 1:
        this.message =  'Tam giác đều'
        break ;
        case 2:
        this.message =  'Tam giác cân'
        break ;
        case 3:
        this.message =  'Tam giác vuông'
        break ;
        case 4:
        this.message =  'Tác giác bất kì'
        break ;
    }
    return this.message ;
  }

  isoscelesTriangle(edgeFirst : number,edgeNext : number, edgeLast : number){
    if(edgeFirst == edgeNext && edgeNext == edgeLast && edgeLast == edgeFirst){
      this.flag = 1 ;
    }
  }

  equilateralTriangle(edgeFirst : number,edgeNext : number, edgeLast : number){
    if(edgeFirst == edgeNext || edgeNext == edgeLast || edgeLast == edgeFirst){
      this.flag = 2 ;
    }
  }

  rightTriangle(edgeFirst : number,edgeNext : number, edgeLast : number){
    if((edgeFirst * edgeFirst == edgeNext * edgeNext + edgeLast * edgeLast) || (edgeNext * edgeNext == edgeFirst * edgeFirst + edgeLast * edgeLast) || (edgeLast * edgeLast == edgeNext * edgeNext + edgeFirst * edgeFirst)){
      this.flag = 3 ;
    }
  }

  randomTriangle(edgeFirst : number,edgeNext : number, edgeLast : number){
    if((edgeFirst + edgeNext > edgeLast) || (edgeFirst + edgeLast > edgeNext) || (edgeNext + edgeLast > edgeFirst)){
      this.flag = 4 ;
    }
  }
}