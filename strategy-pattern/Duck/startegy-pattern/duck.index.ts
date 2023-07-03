import { MallardDuck, RedheadDuck } from './ducks.inheritance.sp';

function miniDuckSimulator() {
  const mallardDuck = new MallardDuck();
  mallardDuck.display();
  mallardDuck.performFly();
  mallardDuck.performQuack();
  mallardDuck.swim();

  const redheadDuck = new RedheadDuck();
  redheadDuck.display();
  redheadDuck.swim();
}

miniDuckSimulator();
