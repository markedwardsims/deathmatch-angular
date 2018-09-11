import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './app.state';
import {WebsocketService} from '@services/websocket/websocket.service';
import * as NotificationsActions from '@actions/notifications/notifications.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../node_modules/deathmatch-components/dist/components/sidebar/sidebar.css'
  ],
  providers: []
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>, private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.openConnection();
    this.store.dispatch(new NotificationsActions.AddNotification({
      type: 'warning',
      message: 'Welcome to Deathmatch!'
    }));
  }
}
