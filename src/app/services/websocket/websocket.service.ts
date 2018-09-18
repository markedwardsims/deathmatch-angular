import {Injectable, NgZone} from '@angular/core';
import io, {Socket} from 'socket.io-client';
import {Warrior} from '@interfaces/warrior';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import * as WarriorsActions from '@actions/warriors/warriors.actions';
import * as NotificationsActions from '@actions/notifications/notifications.actions';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  socket: Socket;

  constructor(private store: Store<AppState>, private ngZone: NgZone) { }

  openConnection(): Socket {
    this.ngZone.runOutsideAngular(() => {
      this.socket = io.connect('ws://:3000')
        .on('init', (allWarriors: Warrior[]) => {
          this.ngZone.run(() => {
            this.store.dispatch(new WarriorsActions.SetAllWarriors(allWarriors));
            this.store.dispatch(new WarriorsActions.SetOpponents());
          });
        })
        .on('allWarriorsData', (allWarriors: Warrior[]) => {
          this.ngZone.run(() => {
            this.store.dispatch(new WarriorsActions.SetAllWarriors(allWarriors));
          });
        })
        .on('tooManyRequests', () => {
          this.ngZone.run(() => {
            this.store.dispatch(new NotificationsActions.AddNotification({
              type: 'error',
              message: 'No cheating!'
            }));
          });
        });
      return this.socket;
    });
  }

  emitWarriorSelection(id: number) {
    this.socket.emit('warriorSelection', id);
  }

}
