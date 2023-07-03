export interface FlyBehaviour {
  fly(): void;
}

export interface QuackBehaviour {
  quack(): void;
}

export class FlyWithWings implements FlyBehaviour {
  public fly(): void {
    console.log(' Fly!');
  }
}

export class FlyNoWay implements FlyBehaviour {
  public fly(): void {
    console.log(' Fly!');
  }
}

export class Quack implements QuackBehaviour {
  public quack(): void {
    console.log(' Quack!');
  }
}

export class Squeak implements QuackBehaviour {
  public quack(): void {
    console.log(' Squeak!');
  }
}

export class Mute implements QuackBehaviour {
  public quack(): void {
    console.log(' Mute!');
  }
}
