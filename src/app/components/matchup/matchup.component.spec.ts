import {MatchupComponent} from './matchup.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {instance, mock} from 'ts-mockito';

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

});
