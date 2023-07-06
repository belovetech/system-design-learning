import { MallardDuck, RedheadDuck, RubberDuck } from './ducks.inheritance.sp';
import { Quack } from './ducks.interface.sp';

class MiniDuckSimulator {
  public static main() {
    const mallardDuck = new MallardDuck();
    mallardDuck.display();
    mallardDuck.performFly();
    mallardDuck.performQuack();
    mallardDuck.swim();

    const redheadDuck = new RedheadDuck();
    redheadDuck.display();
    redheadDuck.swim();

    const rubberDuck = new RubberDuck();
    rubberDuck.display();
    rubberDuck.performQuack();
    rubberDuck.setQuackBehaviour(new Quack());
    rubberDuck.performQuack();
  }
}

MiniDuckSimulator.main();
