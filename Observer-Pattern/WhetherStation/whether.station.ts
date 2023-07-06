import { Subject } from '../subject';
import { Observer } from '../observer';

export class WhetherStation implements Subject {
  private temperature: number;
  private windSpeed: number;
  private pressure: number;
  private value: any;
  private observers: Array<Observer>;

  constructor(temperature: number, windSpeed: number, pressure: number) {
    this.temperature = temperature;
    this.windSpeed = windSpeed;
    this.pressure = pressure;
    this.observers = new Array<Observer>();
  }

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObserver(): void {
    this.value = {
      temperature: this.temperature,
      windSpeed: this.windSpeed,
      pressure: this.pressure,
    };
    this.observers.forEach((observer) => observer.update(this.value));
  }

  public getObservers() {
    return this.observers;
  }
}
