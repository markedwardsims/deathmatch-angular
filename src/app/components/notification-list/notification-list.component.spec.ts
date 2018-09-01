import {NotificationListComponent} from './notification-list.component';

let component: NotificationListComponent;

describe('NotificationListComponent', () => {
  beforeEach(() => {
    component = new NotificationListComponent();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
