import { Duck, MallardDuck } from './duck';
import { Drone, SuperDrone } from '../Drone/drone';
import { DroneAdapter } from '../Drone/droneAdapter';
import { Turkey, WideTurkey } from '../Turkey/turkey';
import { TurkeyAdapter } from '../Turkey/turkeyAdapter';

class DuckSimulator {
  public static main() {
    // Test Duck
    console.log('=============Testing Duck================');
    const duck: Duck = new MallardDuck();
    this.testDuck(duck);

    // Test Turkey
    console.log('=============Testing Turkey================');
    const turkey: Turkey = new WideTurkey();
    const turkeyAdapter: Duck = new TurkeyAdapter(turkey);
    this.testDuck(turkeyAdapter);

    // Test Drone
    console.log('=============Testing Drone================');
    const drone: Drone = new SuperDrone();
    const droneAdapter: Duck = new DroneAdapter(drone);
    this.testDuck(droneAdapter);
  }

  private static testDuck(duck: Duck) {
    duck.fly();
    duck.quack();
  }
}

DuckSimulator.main();
