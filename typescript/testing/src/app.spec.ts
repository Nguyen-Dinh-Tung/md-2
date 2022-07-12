import { Calculator } from './app';
test('add number', ()=>{
  const number1 = 1 ;
  const number2 = 2 ;
  const result = 3 ;
  expect(Calculator.add(number1,number2)).toBe(result)
})