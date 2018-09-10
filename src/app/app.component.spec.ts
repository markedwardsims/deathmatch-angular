import {AppComponent} from './app.component';
import {instance, mock, verify} from "ts-mockito";
import {Store} from "@ngrx/store";
import {AppState} from "./app.state";
import {WebsocketService} from "./services/websocket/websocket.service";

let component: AppComponent;
let store: Store<AppState>;
let websocketService: WebsocketService;

const mockStore: Store<AppState> = mock(Store);
const mockWebsocketService: WebsocketService = mock(WebsocketService);

describe('AppComponent', () => {
  beforeEach(() => {
    store = instance(mockStore);
    websocketService = instance(mockWebsocketService);
    component = new AppComponent(store, websocketService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should open the socket connection on init', () => {
    component.ngOnInit();
    verify(mockWebsocketService.openConnection()).called();
  });

});
