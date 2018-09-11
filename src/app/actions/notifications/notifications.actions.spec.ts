import * as NotificationsActions from '@actions/notifications/notifications.actions';

describe('Notification Actions', () => {

  it('should create the AddNotification action', () => {
    const mockNotification = {
      type: 'foo',
      message: 'bar'
    };
    expect(new NotificationsActions.AddNotification(mockNotification)).toEqual({
      type: NotificationsActions.ADD_NOTIFICATION,
      payload: mockNotification
    });
  });

  it('should create the RemoveNotification action', () => {
    expect(new NotificationsActions.RemoveNotification(99)).toEqual({
      type: NotificationsActions.REMOVE_NOTIFICATION,
      payload: 99
    });
  });

});
