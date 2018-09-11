import {WarriorsListComponent} from './warriors-list.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {anything, instance, mock, when} from 'ts-mockito';
import {Observable} from 'rxjs';

let component: WarriorsListComponent;
let store: Store<AppState>;

const mockStore: Store<AppState> = mock(Store);

describe('WarriorsListComponent', () => {
  beforeEach(() => {
    store = instance(mockStore);
    component = new WarriorsListComponent(store);
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
