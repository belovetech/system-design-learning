import { Beverages, DarkRoast } from './beverages';
import { Mocha, Whip } from './condiment.decorator';

class StarBuzzCofee {
  public static main() {
    let beverage: Beverages;

    beverage = new DarkRoast();
    beverage = new Mocha(beverage);
    beverage = new Mocha(beverage);
    beverage = new Whip(beverage);

    console.log(
      `Description: ${beverage.getDescription()}, Total cost: $${beverage.cost()}`
    );
  }
}

StarBuzzCofee.main();
