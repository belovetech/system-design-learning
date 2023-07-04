abstract class Duck2 {
  abstract display(): void;

  swim() {
    console.log(' I can swim');
  }
}

interface Flyable {
  fly(): string;
}

interface Quackable {
  quack(): string;
}

type FlyableAndQuackable = Flyable & Quackable;

class MallardDuck2 extends Duck2 implements FlyableAndQuackable {
  public display(): void {
    console.log("I'm a mallard duck");
  }

  fly(): string {
    return ' I can fly';
  }

  quack(): string {
    return ' I can quack';
  }
}

class RedheadDuck2 extends Duck2 implements FlyableAndQuackable {
  public display(): void {
    console.log("I'm a redhead duck");
  }

  fly(): string {
    return ' I can fly';
  }

  quack(): string {
    return ' I can quack';
  }
}

class RubberDuck2 extends Duck2 implements Quackable {
  public display(): void {
    console.log("I'm a rubber duck");
  }

  quack(): string {
    return ' I can squack';
  }
}

class DecoyDuck2 extends Duck2 {
  display(): void {
    console.log("I'm a decoy duck");
  }
}

function main2() {
  const mallardDuck: MallardDuck2 = new MallardDuck2();

  mallardDuck.display();
  mallardDuck.swim();
  console.log(mallardDuck.fly());
  console.log(mallardDuck.quack());

  console.log('=======================================');

  const rubberDuck: RubberDuck2 = new RubberDuck2();
  rubberDuck.display();
  rubberDuck.swim();
  console.log(rubberDuck.quack());
}

main2();
