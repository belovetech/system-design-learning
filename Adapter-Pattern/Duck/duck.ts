export interface Duck {
  quack(): void;
  fly(): void;
}

export class MallardDuck implements Duck {
  public quack(): void {
    console.log('I can Quack');
  }

  public fly(): void {
    console.log('I can Fly');
  }
}
