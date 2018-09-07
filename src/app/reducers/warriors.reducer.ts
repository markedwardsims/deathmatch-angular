import * as WarriorsActions from '@actions/warriors.actions';
import {Warrior} from '@interfaces/warrior';
import sampleSize from 'lodash-es/sampleSize';
import {PayloadAction} from '@actions/warriors.actions';

export interface WarriorsState {
  allWarriors: Warrior[];
  opponent1: Warrior;
  opponent2: Warrior;
}

export const initialState: WarriorsState = {
  allWarriors : [],
  opponent1: null,
  opponent2: null
};

export function reducer(state: WarriorsState = initialState, action: PayloadAction): WarriorsState {

  switch (action.type) {
    case WarriorsActions.SET_ALL_WARRIORS:
      return Object.assign({}, state, {allWarriors: action.payload});
    case WarriorsActions.SET_OPPONENTS:
      const randomWarriors = sampleSize(state.allWarriors, 2);
      return Object.assign({}, state, { opponent1: randomWarriors[0], opponent2: randomWarriors[1] });
    case WarriorsActions.SELECT_OPPONENT:
      return state;
    default:
      return state;
  }

}
