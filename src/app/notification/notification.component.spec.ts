import {NotificationComponent} from './notification.component';

let component: NotificationComponent;

describe('NotificationComponent', () => {
  beforeEach(() => {
    component = new NotificationComponent();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
