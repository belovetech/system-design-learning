export abstract class Beverages {
  description: string = 'Unknown beverages';

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

export class DarkRoast extends Beverages {
  constructor() {
    super();
    this.description = 'Dark Roast Coffee';
  }

  public cost() {
    return 0.99;
  }
}

export class LightRoast extends Beverages {
  constructor() {
    super();
    this.description = 'Light Roast Coffee';
  }

  public cost() {
    return 0.75;
  }
}
