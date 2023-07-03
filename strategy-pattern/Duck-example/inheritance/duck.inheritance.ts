abstract class Duck {
  swim() {
    console.log(' I can swim');
  }
  fly() {
    console.log(' I can fly');
  }
  quack() {
    console.log(' I can quack');
  }
  abstract display(): void;
}

class MallardDuck extends Duck {
  public display() {
    console.log("I'm mallard Duck");
  }
}

class RedheadDuck extends Duck {
  public display() {
    console.log("I'm redhead Duck");
  }
}

class RubberDuck extends Duck {
  public display() {
    console.log("I'm rubber duck");
  }

  public override fly() {
    console.log(" I can't fly");
  }

  public override quack() {
    console.log(" I can't quack");
  }
}

class DecoyDuck extends Duck {
  public display() {
    console.log("I'm Decoy Duck");
  }

  public override fly() {
    console.log(" I can't fly");
  }
}

function main() {
  const mallardDuck: MallardDuck = new MallardDuck();

  mallardDuck.display();
  mallardDuck.swim();
  mallardDuck.fly();
  mallardDuck.quack();

  console.log('=======================================');

  const rubberDuck: RubberDuck = new RubberDuck();
  rubberDuck.display();
  rubberDuck.swim();
  rubberDuck.fly();
  rubberDuck.quack();
}

main();
