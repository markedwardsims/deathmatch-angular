import {WebsocketService} from './websocket.service';
import {instance, mock} from 'ts-mockito';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {serverSocket, Socket} from 'socket.io-client';

let service: WebsocketService;
let store: Store<AppState>;

const mockStore: Store<AppState> = mock(Store);

// jest.mock('socket.io-client', () => {
//   return {
//     connect: () => {
//       return {
//         on: function(event, callback) {
//           console.log(event);
//           callback();
//           return this;
//         }
//       } as Socket;
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
  //   const connection = service.openConnection();
  //   connection.emit('init', []);
  //   verify(mockStore.dispatch({
  //     type: '[WARRIORS] SetAllWarriors',
  //     payload: []
  //   }));
  // });

});
