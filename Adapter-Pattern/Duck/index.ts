import { Duck, MallardDuck } from './duck';
import { Turkey, WideTurkey } from './turkey';
import { TurkeyAdapter } from './adapter';

class DuckSimulator {
  public static main() {
    // Test Duck
    console.log('=============Testing Duck================');
    const duck: Duck = new MallardDuck();
    this.testDuck(duck);

    // Test Turkey
    console.log('=============Testing Turkey================');
    const turkey: Turkey = new WideTurkey();
    const turkeyAdapter: Duck = new TurkeyAdapter(turkey);
    this.testDuck(turkeyAdapter);
  }

  private static testDuck(duck: Duck) {
    duck.fly();
    duck.quack();
  }
}

DuckSimulator.main();
