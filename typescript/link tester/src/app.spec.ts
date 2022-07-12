import {Abs} from './main'
test('add message' , ()=>{
  const number = -5 ;
  let expected = 5 ;
  expect(Abs.findAbsNumber(number)).toBe(expected)
});