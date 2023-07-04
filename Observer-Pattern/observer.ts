import { Subject } from './subject';

export interface Observer {
  update(value: number): void;
}

export class SimpleObserver implements Observer {
  private value!: number;
  private simpleSubject: Subject;

  constructor(simpleSubject: Subject) {
    this.simpleSubject = simpleSubject;
    this.simpleSubject.registerObserver(this);
  }

  public update(value: number): void {
    this.value = value;
    this.display();
  }

  private display() {
    console.log('Value ' + this.value);
  }
}
