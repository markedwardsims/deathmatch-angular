import {PayloadAction} from '@interfaces/payload-action';
import {Notification} from '@interfaces/notification';

export const ADD_NOTIFICATION = '[NOTIFICATIONS] AddNotification';

export class AddNotification implements PayloadAction {
  readonly type = ADD_NOTIFICATION;
  constructor(public payload: Notification) {}
}

export type Actions = AddNotification;
