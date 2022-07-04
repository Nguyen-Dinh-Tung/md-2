function detectCollision(objects, point) {
  for (let i = 0; i < objects.length; i++) {
    let object = objects[i];
    if (
      point.x >= object.x &&
      point.x <= object.x + object.width &&
      point.y >= object.y &&
      point.y <= object.y + object.height
    )
      return object;
  }
}

const myObjects = [
  { x: 10, y: 20, width: 30, height: 30 },
  { x: -40, y: 20, width: 30, height: 30 },
  { x: 0, y: 0, width: 10, height: 5 },
];
// console.log(detectCollision(myObjects, { x: 4, y: 2 }));

let [a, b, c] = myObjects;
function search(ob, point) {
  if (
    point.x >= ob.x &&
    point.x <= ob.x + ob.width &&
    point.y >= ob.y &&
    point.y <= ob.y + ob.height
  )
    return ob;
}
console.log(search(b, { x: 4, y: 2 }));
