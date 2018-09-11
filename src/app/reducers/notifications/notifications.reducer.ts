import * as NotificationsActions from '@actions/notifications/notifications.actions';
import {Notification} from '@interfaces/notification';
import {PayloadAction} from '@interfaces/payload-action';

export type NotificationsState = Notification[];

export const initialState: NotificationsState = [];

export function reducer(state: NotificationsState = initialState, action: PayloadAction): NotificationsState {

  switch (action.type) {
    case NotificationsActions.ADD_NOTIFICATION:
      return [action.payload].concat(state);
    default:
      return state;
  }

}
