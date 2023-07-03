import { BasicCameraApp, CameraPlusApp } from './cameraphoneapp.superclass';

class CameraPhoneAppSimulator {
  public static main() {
    const basic = new BasicCameraApp();
    basic.take();
    basic.edit();
    basic.save();
    basic.performShare();

    console.log('==============================');
    const plus = new CameraPlusApp();
    plus.take();
    plus.edit();
    plus.save();
    plus.performShare();
  }
}

CameraPhoneAppSimulator.main();
