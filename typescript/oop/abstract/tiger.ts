import { Animal } from "./animal";
import { Edible } from "./edible";
export class Tiger extends Animal implements Edible{
  makeSound() : string {
    return 'Tiger : Roarrrr!'
  }
  howToEat(): string {
    return ' Could be fried'
  }
}