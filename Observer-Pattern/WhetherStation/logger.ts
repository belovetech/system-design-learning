import { Observer } from '../observer';
import { Subject } from '../subject';

export class Logger implements Observer {
  private whetherStation!: object;

  constructor(subject: Subject) {
    subject.registerObserver(this);
  }

  public update(value: any): void {
    this.whetherStation = value;
    this.display();
  }

  private display(): void {
    console.log('Logger Value: ' + JSON.stringify(this.whetherStation));
  }
}
