import {NotificationListComponent} from './notification-list.component';
import {LeaderboardComponent} from "../leaderboard/leaderboard.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import {anything, instance, mock, when} from "ts-mockito";
import {Observable} from "rxjs";

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

});
