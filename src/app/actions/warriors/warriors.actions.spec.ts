import * as WarriorsActions from '@actions/warriors/warriors.actions';

describe('Warrior Actions', () => {

  it('should create the SetAllWarriors action', () => {
    const mockWarriors = [];
    expect(new WarriorsActions.SetAllWarriors(mockWarriors)).toEqual({
      type: WarriorsActions.SET_ALL_WARRIORS,
      payload: mockWarriors
    });
  });

  it('should create the SetOpponents action', () => {
    const mockWarriors = [];
    expect(new WarriorsActions.SetOpponents()).toEqual({
      type: WarriorsActions.SET_OPPONENTS
    });
  });

  it('should create the SelectOpponent action', () => {
    const mockId = 999;
    expect(new WarriorsActions.SelectOpponent(mockId)).toEqual({
      type: WarriorsActions.SELECT_OPPONENT,
      payload: mockId
    });
  });

});
