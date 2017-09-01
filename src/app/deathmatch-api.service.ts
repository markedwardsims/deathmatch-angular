import { Injectable } from '@angular/core';
import { WarriorModel } from './warrior.model';

const warriors = [
  new WarriorModel(1, 'Chuck Norris', 0, '/assets/images/chuck-norris.jpg'),
  new WarriorModel(2, 'Nitro',        0, '/assets/images/nitro.jpg'),
  new WarriorModel(3, 'Darth Vader',  0, '/assets/images/darth-vader.jpg'),
  new WarriorModel(4, 'T2000',        0, '/assets/images/t2000.jpg'),
  new WarriorModel(5, 'Mr. T',        0, '/assets/images/mr-t.jpg')
];

@Injectable()
export class DeathmatchApiService {

  getAllWarriors() {
    return warriors;
  }

}
