import exp from 'constants';
import { BaisicCALC } from './app';
describe('BaisicCALC' ,()=>{
  let calc : BaisicCALC = new BaisicCALC() ;
  const a = 5 ;
  const b = 6 ;
  test('Return sum a+b' ,()=>{
    expect(calc.sum(a,b)).toEqual(a+b)
  })
  test('Return subtract a - b' ,()=>{
    expect(calc.sub(a,b)).toEqual(a+b)
  })
  test('Return multphe a * b' ,()=>{
    expect(calc.multiple(a,b)).toEqual(a+b)
  })
  test('Return divide a / b' ,()=>{
    expect(calc.divide(a,b)).toEqual(a+b)
  })
})