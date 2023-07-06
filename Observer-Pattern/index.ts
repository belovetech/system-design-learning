import { Observer, SimpleObserver } from './observer';
import { SimpleSubject } from './subject';

class SubjectSimulator {
  public static main() {
    const subject = new SimpleSubject();
    const observer1 = new SimpleObserver(subject);
    const observer2 = new SimpleObserver(subject);

    subject.setValue(20);

    const observers = subject.getObservers();
    console.log(observers);
  }
}

SubjectSimulator.main();
