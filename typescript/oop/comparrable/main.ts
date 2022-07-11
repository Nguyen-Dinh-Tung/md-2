import { Comparable } from './comparable';
import { Circle } from './circle';
import { ComparableCircle } from "./ComparableCircle ";
let circles = [];
circles[0] = new ComparableCircle(10)
circles[1] = new ComparableCircle(123)
circles[2] = new ComparableCircle(33)
circles[3] = new ComparableCircle(65)
let result = circles[1].compareTo(circles[2])
console.log(circles[3].getRadius())