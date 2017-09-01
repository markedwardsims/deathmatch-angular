import { Injectable } from '@angular/core';
import { WarriorInterface } from './warrior.interface';

const warriors: WarriorInterface[] = [
  { id: 1, name: 'Chuck Norris',  wins: 0, image: '/assets/images/chuck-norris.jpg' },
  { id: 2, name: 'Nitro',         wins: 0, image: '/assets/images/nitro.jpg' },
  { id: 3, name: 'Darth Vader',   wins: 0, image: '/assets/images/darth-vader.jpg' },
  { id: 4, name: 'T2000',         wins: 0, image: '/assets/images/t2000.jpg' },
  { id: 5, name: 'Mr. Twins: ',   wins: 0, image: '/assets/images/mr-t.jpg' }
];

@Injectable()
export class DeathmatchApiService {

  getAllWarriors() {
    return warriors;
  }

}
