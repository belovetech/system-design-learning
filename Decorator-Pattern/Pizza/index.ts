import { Pizza, ThickCrushPizza } from './pizza';
import { Cheese, Olive, Peppers } from './topping.decorator';

class DominoPizza {
  public static main() {
    let pizza: Pizza = new ThickCrushPizza();
    pizza = new Cheese(pizza);
    pizza = new Cheese(pizza);
    pizza = new Olive(pizza);
    pizza = new Olive(pizza);
    pizza = new Peppers(pizza);

    console.log(
      `Description: ${pizza.getDescription()}, Cost: $${pizza
        .cost()
        .toFixed(2)}`
    );
  }
}
DominoPizza.main();
