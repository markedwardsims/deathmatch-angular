import {PayloadAction} from '@interfaces/payload-action';
import {Notification} from '@interfaces/notification';

export const ADD_NOTIFICATION =     '[NOTIFICATIONS] AddNotification';
export const REMOVE_NOTIFICATION =  '[NOTIFICATIONS] RemoveNotification';

export class AddNotification implements PayloadAction {
  readonly type = ADD_NOTIFICATION;
  constructor(public payload: Notification) {}
}

export class RemoveNotification implements PayloadAction {
  readonly type = REMOVE_NOTIFICATION;
  constructor(public payload: number) {}
}

export type Actions = AddNotification;
