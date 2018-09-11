import {Warrior} from '@interfaces/warrior';
import {PayloadAction} from '@interfaces/payload-action';

export const SET_ALL_WARRIORS = '[WARRIORS] SetAllWarriors';
export const SET_OPPONENTS =    '[WARRIORS] SetOpponents';
export const SELECT_OPPONENT =  '[WARRIORS] SelectOpponent';

export class SetAllWarriors implements PayloadAction {
  readonly type = SET_ALL_WARRIORS;
  constructor(public payload: Warrior[]) {}
}

export class SetOpponents implements PayloadAction {
  readonly type = SET_OPPONENTS;
}

export class SelectOpponent implements PayloadAction {
  readonly type = SELECT_OPPONENT;
  constructor(public payload: number) {}
}

export type Actions = SetAllWarriors | SetOpponents | SelectOpponent;
