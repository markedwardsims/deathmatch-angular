import {AppComponent} from './app.component';
import {deepEqual, instance, mock, resetCalls, verify} from 'ts-mockito';
import {Store} from '@ngrx/store';
import {AppState} from './app.state';
import {WebsocketService} from './services/websocket/websocket.service';
import * as NotificationsActions from '@actions/notifications/notifications.actions';

let component: AppComponent;
let store: Store<AppState>;
let websocketService: WebsocketService;

const mockStore: Store<AppState> = mock(Store);
const mockWebsocketService: WebsocketService = mock(WebsocketService);

describe('AppComponent', () => {
  beforeEach(() => {
    store = instance(mockStore);
    websocketService = instance(mockWebsocketService);
    component = new AppComponent(store, websocketService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should open the socket connection on init', () => {
    component.ngOnInit();
    verify(mockWebsocketService.openConnection()).called();
  });

  it('should dispatch a notification on init', () => {
    const action = new NotificationsActions.AddNotification({
      type: 'warning',
      message: 'Welcome to Deathmatch!'
    });
    component.ngOnInit();
    verify(mockStore.dispatch(deepEqual(action))).once();
  });

  afterEach(() => {
    resetCalls(mockStore);
  });

});
