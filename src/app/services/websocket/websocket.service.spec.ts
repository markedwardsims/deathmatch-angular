import {WebsocketService} from './websocket.service';
import {instance, mock, resetCalls} from 'ts-mockito';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {NgZone} from '@angular/core';

let service: WebsocketService;
let store: Store<AppState>;
let ngZone: NgZone;
let serverSocket: any;

const mockStore: Store<AppState> = mock(Store);

jest.mock('socket.io-client', () => {

  class MockSocketIO {

    events = {};

    emit = (event, ...args) => {
      this.events[event].forEach(func => func(...args));
    };

    socket = {
      on: (event, callback) => {
        if (this.events[event]) {
          this.events[event].push(callback);
        }
        this.events[event] = [callback];
        return this.socket;
      },
      emit: this.emit
    };

    serverSocket = {
      emit: this.emit
    };

    connect() {
      return this.socket;
    }
  }

  const io = new MockSocketIO();

  serverSocket = io.serverSocket;
  return io;
});

describe('WebsocketService', () => {
  beforeEach(() => {
    store = instance(mockStore);
    ngZone = {} as NgZone;
    service = new WebsocketService(store, ngZone);
    ngZone.runOutsideAngular = callback => callback.apply(service);
    ngZone.run = callback => callback.apply(service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should dispatch a SetAllWarriors action on init', () => {
    jest.spyOn(store, 'dispatch');

    service.openConnection();
    serverSocket.emit('init', []);

    expect(store.dispatch).toHaveBeenCalledWith({
      type: '[WARRIORS] SetAllWarriors',
      payload: []
    });
  });

  it('should dispatch a SetOpponents action on init', () => {
    jest.spyOn(store, 'dispatch');

    service.openConnection();
    serverSocket.emit('init', []);

    expect(store.dispatch).toHaveBeenCalledWith({
      type: '[WARRIORS] SetOpponents'
    });
  });

  it('should dispatch a SetAllWarriors action on allWarriorsData', () => {
    jest.spyOn(store, 'dispatch');

    service.openConnection();
    serverSocket.emit('allWarriorsData', []);

    expect(store.dispatch).toHaveBeenCalledWith({
      type: '[WARRIORS] SetAllWarriors',
      payload: []
    });
  });

  it('should dispatch a AddNotification action on tooManyRequests', () => {
    jest.spyOn(store, 'dispatch');

    service.openConnection();
    serverSocket.emit('tooManyRequests');

    expect(store.dispatch).toHaveBeenCalledWith({
      type: '[NOTIFICATIONS] AddNotification',
      payload: {
        type: 'error',
        message: 'No cheating!'
      }
    });
  });

  afterEach(() => {
    resetCalls(mockStore);
  });

});
