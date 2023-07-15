import { Beverages } from './beverages';

abstract class CondimentDecorator extends Beverages {
  public abstract getDescription(): string;
}

export class Whip extends CondimentDecorator {
  beverage: Beverages;

  constructor(beverage: Beverages) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Whip';
  }

  public cost(): number {
    return this.beverage.cost() + 0.1;
  }
}

export class Mocha extends CondimentDecorator {
  beverages: Beverages;

  constructor(beverage: Beverages) {
    super();
    this.beverages = beverage;
  }

  public getDescription(): string {
    return this.beverages.getDescription() + ', Mocha';
  }

  public cost(): number {
    return this.beverages.cost() + 0.5;
  }
}
