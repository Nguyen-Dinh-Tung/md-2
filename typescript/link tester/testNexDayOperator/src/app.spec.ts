import { NextDayCalculator } from './main';
import {Constants} from './const' ;
test('ADD day , month , year' , ()=>{
  let nextDay = new NextDayCalculator(Constants.day,Constants.month,Constants.year)
  const day = Constants.day ;
  const month = Constants.month ;
  const year = Constants.year ;
  const result = `'Ngày :' + ${Constants.day + 1} + ' Tháng : ' + ${Constants.month} + ' Năm : ' + ${Constants.year}`
  console.log(nextDay.getDay())
  expect(nextDay.getNextDay(day,month,year)).toEqual(result)
})