import {Action as NgrxAction} from '@ngrx/store';
import {Warrior} from '@interfaces/warrior';

export const SET_ALL_WARRIORS = '[WARRIORS] SetAll';

export class SetAllWarriors implements NgrxAction {
  readonly type = SET_ALL_WARRIORS;

  constructor(public payload: Warrior[]) {}
}

export type Actions = SetAllWarriors;
