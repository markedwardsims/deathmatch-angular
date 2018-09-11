import {reducer, initialState} from '@reducers/warriors/warriors.reducer';
import * as WarriorsActions from '@actions/warriors/warriors.actions';

// mock the lodash sampleSize method so we can control what it returns
jest.mock('lodash-es/sampleSize', () => {
  return (arr) => {
    return [arr[1], arr[0]];
  };
});

describe('Warriors Reducer', () => {

  it('should return initial state by default', () => {
    const newState = reducer(undefined, { action: 'foo' });
    expect(newState).toEqual(initialState);
  });

  it('should set all warriors with SET_ALL_WARRIORS', () => {
    const type = WarriorsActions.SET_ALL_WARRIORS;
    const payload = [{ id: 1, name: 'foo',  wins: 0, image: 'bar' }];
    const state = reducer(null, {type, payload});
    expect(state.allWarriors).toEqual(payload);
  });

  it('should select 2 unique oppoonents with SET_OPPONENTS', () => {
    const type = WarriorsActions.SET_OPPONENTS;
    const warrior1 = { id: 1, name: 'foo',  wins: 0, image: 'bar' };
    const warrior2 = { id: 2, name: 'baz',  wins: 0, image: 'bah' };
    const previousState = {
      allWarriors: [warrior1, warrior2],
      opponent1: null,
      opponent2: null
    };
    const state = reducer(previousState, {type});

    expect(state.opponent1).toEqual(warrior2);
    expect(state.opponent2).toEqual(warrior1);
  });

  it('should return the existing state with SELECT_OPPONENT', () => {
    const type = WarriorsActions.SELECT_OPPONENT;
    const warrior1 = { id: 1, name: 'foo',  wins: 0, image: 'bar' };
    const warrior2 = { id: 2, name: 'baz',  wins: 0, image: 'bah' };
    const previousState = {
      allWarriors: [warrior1, warrior2],
      opponent1: null,
      opponent2: null
    };
    const state = reducer(previousState, {type});

    expect(state).toEqual(previousState);
  });

});
