import {reducer, initialState} from '@reducers/notifications/notifications.reducer';
import * as NotificationsActions from '@actions/notifications/notifications.actions';

describe('Notifications Reducer', () => {

  it('should return initial state by default', () => {
    const newState = reducer(undefined, { action: 'foo' });
    expect(newState).toEqual(initialState);
  });

  it('should add a notification with ADD_NOTIFICATION', () => {
    const type = NotificationsActions.ADD_NOTIFICATION;
    const notification1 = {type: 'foo', message: 'bar'};
    const state = reducer([], {type, payload: notification1});
    expect(state).toEqual([notification1]);
  });

  it('should prepend the notification with ADD_NOTIFICATION', () => {
    const type = NotificationsActions.ADD_NOTIFICATION;
    const notification1 = {type: 'foo', message: 'bar'};
    const notification2 = {type: 'baz', message: 'bash'};
    const notification3 = {type: 'bah', message: 'bim'};
    const state = reducer([notification1, notification2], {type, payload: notification3});
    expect(state).toEqual([notification3, notification1, notification2]);
  });

  it('should remove a notification with REMOVE_NOTIFICATION', () => {
    const type = NotificationsActions.REMOVE_NOTIFICATION;
    const notification1 = {type: 'foo', message: 'bar'};
    const notification2 = {type: 'baz', message: 'bash'};
    const notification3 = {type: 'bah', message: 'bim'};
    const state = reducer([notification1, notification2, notification3], {type, payload: 1});
    expect(state).toEqual([notification1, notification3]);
  });

});
