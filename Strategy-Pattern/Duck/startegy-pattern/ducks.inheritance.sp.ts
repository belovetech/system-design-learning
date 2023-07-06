import {
  FlyBehaviour,
  QuackBehaviour,
  FlyWithWings,
  Quack,
  FlyNoWay,
  Mute,
  Squeak,
} from './ducks.interface.sp';

abstract class Ducks {
  protected flyBehaviour!: FlyBehaviour;
  protected quackBehaviour!: QuackBehaviour;

  public performFly(): void {
    this.flyBehaviour.fly();
  }

  public performQuack(): void {
    this.quackBehaviour.quack();
  }

  public setFlyBehaviour(flyBehaviour: FlyBehaviour): void {
    this.flyBehaviour = flyBehaviour;
  }

  public setQuackBehaviour(quackBehaviour: QuackBehaviour): void {
    this.quackBehaviour = quackBehaviour;
  }

  public swim(): void {
    console.log(' All ducks float, even decoy!');
  }

  abstract display(): void;
}

export class MallardDuck extends Ducks {
  constructor() {
    super();
    this.flyBehaviour = new FlyWithWings();
    this.quackBehaviour = new Quack();
  }

  public display(): void {
    console.log("I'm mallard duck");
  }
}

export class RedheadDuck extends Ducks {
  constructor() {
    super();
    this.flyBehaviour = new FlyNoWay();
    this.quackBehaviour = new Mute();
  }

  public display(): void {
    console.log("I'm redhead duck");
  }
}

export class RubberDuck extends Ducks {
  constructor() {
    super();
    this.quackBehaviour = new Squeak();
  }

  public display(): void {
    console.log("I'm rubber duck");
  }
}

export class DecoyDuck extends Ducks {
  public display(): void {
    console.log("I'm decoy duck");
  }
}
