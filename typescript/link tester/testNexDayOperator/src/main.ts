import { year } from './const';
export class NextDayCalculator{
  day : number ;
  month : number ;
  year : number ;
  constructor(day : number , month : number , year : number){
    this.day = day ;
    this.month = month ;
    this.year = year ;
  }
  getDay(): any {
    return `'Ngày :' + ${this.day} + ' Tháng : ' + ${this.month} + ' Năm : ' + ${this.year}`
  }
  getNextDay(day : number , month : number , year : number): any {
    return `'Ngày :' + ${this.day + 1} + ' Tháng : ' + ${this.month} + ' Năm : ' + ${this.year}`
  }

}