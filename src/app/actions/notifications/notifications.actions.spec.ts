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

});
