import { AlertSystem } from './alert.system';
import { Logger } from './logger';
import { UserInterface } from './user.interface';
import { WhetherStation } from './whether.station';

class WhetherStationSimulator {
  public static main() {
    const whetherStation = new WhetherStation(60, 100, 65);

    const _userInterface = new UserInterface(whetherStation);
    const _logger = new Logger(whetherStation);
    const _alert = new AlertSystem(whetherStation);

    whetherStation.notifyObserver();
    const observers = whetherStation.getObservers();
    console.log(observers);
  }
}

WhetherStationSimulator.main();
