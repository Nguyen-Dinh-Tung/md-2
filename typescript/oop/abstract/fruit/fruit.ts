import { Edible } from './../edible';
export abstract class Fruit implements Edible {
  abstract howToEat():string ;
}