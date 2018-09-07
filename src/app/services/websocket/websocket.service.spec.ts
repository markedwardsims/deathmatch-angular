import {WebsocketService} from './websocket.service';
import {instance, mock} from 'ts-mockito';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';

let service: WebsocketService;
let store: Store<AppState>;

const mockStore: Store<AppState> = mock(Store);

// jest.mock('socket.io-client', () => {
//   return {
//     connect: () => {
//       return new WebSocket('foo');
//     }
//   };
// });

describe('WebsocketService', () => {
  beforeEach(() => {
    store = instance(mockStore);
    service = new WebsocketService(store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should open a connenction', () => {
  //   const socket = service.openConnection();
  //   expect(socket instanceof WebSocket).toBeTruthy();
  // });


});
