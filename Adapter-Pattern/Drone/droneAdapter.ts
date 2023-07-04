import { Duck } from '../Duck/duck';
import { Drone } from './drone';

export class DroneAdapter implements Duck {
  private drone: Drone;

  constructor(drone: Drone) {
    this.drone = drone;
  }

  public fly(): void {
    this.drone.spin_rooter();
    this.drone.take_off();
  }

  public quack(): void {
    this.drone.beep();
  }
}
