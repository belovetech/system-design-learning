import { Observer, SimpleObserver } from './observer';
import { SimpleSubject, Subject } from './subject';

class SubjectSimulator {
  public static main() {
    const subject = new SimpleSubject();
    const observer: Observer = new SimpleObserver(subject);

    subject.setValue(10);
  }
}

SubjectSimulator.main();
