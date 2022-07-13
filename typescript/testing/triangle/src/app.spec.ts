import { Triangle } from './app';
test('add edge', ()=>{
  let triangle = new Triangle()
  const edgeFirst = 2 ;
  const edgeNext = 2 ;
  const edgeLaster = 2 ;
  const result = 'Tam giác đều' ;
  expect(triangle.isTriangle(edgeFirst,edgeNext,edgeLaster)).toEqual(result)
})
