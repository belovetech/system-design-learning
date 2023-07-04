import { BasicCameraApp, CameraPlusApp } from './cameraphoneapp.superclass';
import { Text, Email, SocialMedia } from './cameraphoneapp.interface';

class CameraPhoneAppSimulator {
  public static main() {
    const basic = new BasicCameraApp(new Email());
    basic.take();
    basic.edit();
    basic.save();
    basic.performShare();

    console.log('==============================');

    const plus = new CameraPlusApp(new SocialMedia());
    plus.take();
    plus.edit();
    plus.save();
    plus.performShare();
  }
}

CameraPhoneAppSimulator.main();
