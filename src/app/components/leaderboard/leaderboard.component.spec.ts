import {LeaderboardComponent} from './leaderboard.component';
import {Store} from '@ngrx/store';
import {anything, instance, mock, when} from 'ts-mockito';
import {AppState} from '../../app.state';
import {Observable} from 'rxjs';

let component: LeaderboardComponent;
let store: Store<AppState>;

const mockStore: Store<AppState> = mock(Store);

describe('LeaderboardComponent', () => {
  beforeEach(() => {
    store = instance(mockStore);
    component = new LeaderboardComponent(store);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should set the warriors on init', () => {
    const mockWarriors = Observable.create([]);
    when(mockStore.pipe(anything())).thenReturn(mockWarriors);
    component.ngOnInit();
    expect(component.warriors).toEqual(mockWarriors);
  });

});
