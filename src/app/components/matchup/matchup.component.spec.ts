import {MatchupComponent} from './matchup.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {anything, instance, mock, verify, when} from 'ts-mockito';
import {Observable} from 'rxjs';
import * as WarriorsActions from '@actions/warriors.actions';

let component: MatchupComponent;
let store: Store<AppState>;

const mockStore: Store<AppState> = mock(Store);

describe('MatchupComponent', () => {
  beforeEach(() => {
    store = instance(mockStore);
    component = new MatchupComponent(store);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should set opponent1 on init', () => {
    const mockWarrior = Observable.create({
      id: 99,
      name: 'foo',
      wins: 0,
      image: 'bar'
    });
    when(mockStore.pipe(anything())).thenReturn(mockWarrior);
    component.ngOnInit();
    expect(component.opponent1).toEqual(mockWarrior);
  });

  it('should set opponent2 on init', () => {
    const mockWarrior = Observable.create({
      id: 99,
      name: 'foo',
      wins: 0,
      image: 'bar'
    });
    when(mockStore.pipe(anything())).thenReturn(mockWarrior);
    component.ngOnInit();
    expect(component.opponent2).toEqual(mockWarrior);
  });

  it('should dispatch an even when an opponent is selected', () => {
    const action = new WarriorsActions.SelectOpponent(99);
    component.selectOpponent(99);
    verify(mockStore.dispatch(action));
  });

  });
