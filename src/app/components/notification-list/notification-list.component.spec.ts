import {NotificationListComponent} from './notification-list.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {anything, deepEqual, instance, mock, verify, when} from 'ts-mockito';
import {Observable} from 'rxjs';
import * as NotificationsActions from '@actions/notifications/notifications.actions';

let component: NotificationListComponent;
let store: Store<AppState>;

const mockStore: Store<AppState> = mock(Store);

describe('NotificationListComponent', () => {
  beforeEach(() => {
    store = instance(mockStore);
    component = new NotificationListComponent(store);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should set the notifications on init', () => {
    const mockNotifications = Observable.create([]);
    when(mockStore.pipe(anything())).thenReturn(mockNotifications);
    component.ngOnInit();
    expect(component.notifications).toEqual(mockNotifications);
  });

  it('should remove the notification', () => {
    const action = new NotificationsActions.RemoveNotification(99);
    component.removeNotification(99);
    verify(mockStore.dispatch(deepEqual(action))).once();
  });

});
