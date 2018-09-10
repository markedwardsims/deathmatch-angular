import * as WarriorsActions from '@actions/warriors.actions';
import {SET_ALL_WARRIORS} from '@actions/warriors.actions';
import {SELECT_OPPONENT, SET_OPPONENTS} from "./warriors.actions";

describe('AppComponent', () => {

  it('should create the SetAllWarriors action', () => {
    const mockWarriors = [];
    expect(new WarriorsActions.SetAllWarriors(mockWarriors)).toEqual({
      type: SET_ALL_WARRIORS,
      payload: mockWarriors
    });
  });

  it('should create the SetOpponents action', () => {
    const mockWarriors = [];
    expect(new WarriorsActions.SetOpponents()).toEqual({
      type: SET_OPPONENTS
    });
  });

  it('should create the SelectOpponent action', () => {
    const mockId = 999;
    expect(new WarriorsActions.SelectOpponent(mockId)).toEqual({
      type: SELECT_OPPONENT,
      payload: mockId
    });
  });

});
