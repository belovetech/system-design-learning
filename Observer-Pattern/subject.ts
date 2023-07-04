import { Observer } from './observer';

export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObserver(): void;
}

export class SimpleSubject implements Subject {
  private observers: Array<Observer>;
  private value: number = 0;

  constructor() {
    this.observers = new Array<Observer>();
  }

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.findIndex((element) => element === observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObserver(): void {
    this.observers.forEach((observer) => {
      observer.update(this.value);
    });
  }

  public setValue(value: number): void {
    this.value = value;
    this.notifyObserver();
  }
}
