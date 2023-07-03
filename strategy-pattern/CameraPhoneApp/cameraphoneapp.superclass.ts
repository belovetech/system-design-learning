import {
  ShareBehaviour,
  Text,
  Email,
  SocialMedia,
} from './cameraphoneapp.interface';

abstract class CameraPhoneApp {
  protected shareBehaviour!: ShareBehaviour;

  public performShare() {
    this.shareBehaviour.share();
  }

  public take(): void {
    console.log('Take!');
  }

  public save(): void {
    console.log('Save!');
  }

  abstract edit(): void;
}

export class BasicCameraApp extends CameraPhoneApp {
  constructor() {
    super();
    this.shareBehaviour = new Text();
  }

  edit(): void {
    console.log('Basic Edit!');
  }
}

export class CameraPlusApp extends CameraPhoneApp {
  constructor() {
    super();
    this.shareBehaviour = new Email();
  }

  edit(): void {
    console.log('Advanced Edit!');
  }
}
