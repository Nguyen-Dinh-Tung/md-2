import { Animal } from "./animal";
import { Edible } from "./edible";
export class Chicken extends Animal{
  makeSound() : string {
    return 'Chicken : cluck - cluck !'
  }
  howToEat(): string {
    return ' Could be fried'
  }
}