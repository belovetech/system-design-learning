export interface Drone {
  beep(): void;
  spin_rooter(): void;
  take_off(): void;
}

export class SuperDrone implements Drone {
  public beep(): void {
    console.log('Beeb beeb beeb!!!');
  }

  public spin_rooter(): void {
    console.log('rotters are spinning!!!');
  }
  public take_off(): void {
    console.log('Taking off!!!');
  }
}
