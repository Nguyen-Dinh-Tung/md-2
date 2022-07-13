import { FizzBuzz } from './app';
import { Constant } from "./Constant";
test('add number', ()=>{
  let game = new FizzBuzz()
  const number = -1 ;
  const result = Constant.FizzBuzz ;
  expect(game.isNumberFizzBuzz(number)).toEqual(result)
})