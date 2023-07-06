import { SimpleObserver } from './observer';
import { SimpleSubject } from './subject';

class SubjectSimulator {
  public static main() {
    const subject = new SimpleSubject();
    const observer1 = new SimpleObserver(subject);
    const observer2 = new SimpleObserver(subject);

    subject.removeObserver(observer1);
    subject.setValue(20);
    console.log(subject.getObservers());
  }
}

SubjectSimulator.main();
