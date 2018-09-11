import {WarriorsState} from '@reducers/warriors/warriors.reducer';
import {NotificationsState} from '@reducers/notifications/notifications.reducer';

export interface AppState {
  readonly warriors: WarriorsState;
  readonly notifications: NotificationsState;
}
