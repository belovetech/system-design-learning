import { ShareBehaviour } from './cameraphoneapp.interface';

abstract class CameraPhoneApp {
  protected shareBehaviour!: ShareBehaviour;

  public performShare() {
    this.shareBehaviour.share();
  }

  public setShareBehaviour(shareBehaviour: ShareBehaviour): void {
    this.shareBehaviour = shareBehaviour;
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
  constructor(shareInstance: ShareBehaviour) {
    super();
    this.shareBehaviour = shareInstance;
  }

  edit(): void {
    console.log('Basic Edit!');
  }
}

export class CameraPlusApp extends CameraPhoneApp {
  constructor(shareInstance: ShareBehaviour) {
    super();
    this.shareBehaviour = shareInstance;
  }

  edit(): void {
    console.log('Advanced Edit!');
  }
}
