import {Action as NgrxAction} from '@ngrx/store';
import {Warrior} from '@interfaces/warrior';

export const SET_ALL_WARRIORS = '[WARRIORS] SetAllWarriors';
export const SET_OPPONENTS =    '[WARRIORS] SetOpponents';

export class SetAllWarriors implements NgrxAction {
  readonly type = SET_ALL_WARRIORS;
  constructor(public payload: Warrior[]) {}
}

export class SetOpponents implements NgrxAction {
  readonly type = SET_OPPONENTS;
}

export type Actions = SetAllWarriors | SetOpponents;
