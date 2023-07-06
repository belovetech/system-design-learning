import { Observer } from '../observer';
import { Subject } from '../subject';

export class UserInterface implements Observer {
  private whetherStation!: object;

  constructor(subject: Subject) {
    subject.registerObserver(this);
  }

  public update(value: any): void {
    this.whetherStation = value;
    this.display();
  }

  private display() {
    console.log('UserInterface Value: ' + JSON.stringify(this.whetherStation));
  }
}
