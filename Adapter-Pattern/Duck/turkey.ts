export interface Turkey {
  gobble(): void;
  fly(): void;
}

export class WideTurkey implements Turkey {
  public gobble(): void {
    console.log('I can Gobble!');
  }

  public fly(): void {
    console.log('I can Fly better!');
  }
}
