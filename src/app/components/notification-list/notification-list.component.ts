import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {Observable} from 'rxjs';
import {Notification} from '@interfaces/notification';
import {LeaderboardComponent} from '@components/leaderboard/leaderboard.component';
import {anything, instance, mock, when} from 'ts-mockito';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: [
    '../../../../node_modules/deathmatch-components/dist/components/notification/notification.css'
  ]
})
export class NotificationListComponent implements OnInit {
  notifications: Observable<Notification[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.notifications = this.store.pipe(select((state: any) => state.notifications));
  }

}
