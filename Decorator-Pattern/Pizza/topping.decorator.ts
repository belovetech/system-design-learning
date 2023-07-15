import { Pizza } from './pizza';

export abstract class ToppingsDecorator extends Pizza {
  public abstract getDescription(): string;
}

export class Cheese extends ToppingsDecorator {
  private pizza: Pizza;

  constructor(pizza: Pizza) {
    super();
    this.pizza = pizza;
  }

  public getDescription(): string {
    return this.pizza.getDescription() + ', Cheese';
  }

  public cost(): number {
    return this.pizza.cost() + 0.9;
  }
}

export class Olive extends ToppingsDecorator {
  private pizza: Pizza;

  constructor(pizza: Pizza) {
    super();
    this.pizza = pizza;
  }

  public getDescription(): string {
    return this.pizza.getDescription() + ', Olive';
  }

  public cost(): number {
    return this.pizza.cost() + 0.7;
  }
}

export class Peppers extends ToppingsDecorator {
  private pizza: Pizza;

  constructor(pizza: Pizza) {
    super();
    this.pizza = pizza;
  }

  public getDescription(): string {
    return this.pizza.getDescription() + ', Peppers';
  }

  public cost(): number {
    return this.pizza.cost() + 0.5;
  }
}
