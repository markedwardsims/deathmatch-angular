import * as WarriorsActions from '@actions/warriors.actions';
import {Warrior} from '@interfaces/warrior';

export interface WarriorsState {
  allWarriors: Warrior[];
  opponent1: Warrior;
  opponent2: Warrior;
}

const initialState: WarriorsState = {
  allWarriors : [
    { id: 1, name: 'Chuck Norris',  wins: 0, image: '/assets/images/chuck-norris.jpg' },
    { id: 2, name: 'Nitro',         wins: 0, image: '/assets/images/nitro.jpg' },
    { id: 3, name: 'Darth Vader',   wins: 0, image: '/assets/images/darth-vader.jpg' },
    { id: 4, name: 'T2000',         wins: 0, image: '/assets/images/t2000.jpg' },
    { id: 5, name: 'Mr. Twins: ',   wins: 0, image: '/assets/images/mr-t.jpg' }
  ],
  opponent1: null,
  opponent2: null
};

export function reducer(state: WarriorsState = initialState, action: WarriorsActions.Actions): WarriorsState {

  switch (action.type) {
    case WarriorsActions.SET_ALL_WARRIORS:
      return {...state};
    default:
      return state;
  }

}
