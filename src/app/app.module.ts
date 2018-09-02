import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {reducer} from '@reducers/warriors.reducer';
import {AppComponent} from './app.component';
import {HeaderComponent} from '@components/header/header.component';
import {LeaderboardComponent} from '@components/leaderboard/leaderboard.component';
import {WarriorsListComponent} from '@components/warriors-list/warriors-list.component';
import {WarriorComponent} from '@components/warrior/warrior.component';
import {NotificationListComponent} from '@components/notification-list/notification-list.component';
import {NotificationComponent} from '@components/notification/notification.component';
import {WarriorDetailComponent} from '@components/warrior-detail/warrior-detail.component';
import {MatchupComponent} from '@components/matchup/matchup.component';
import {ArraySortPipe} from '@pipes/array-sort/array-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeaderboardComponent,
    WarriorsListComponent,
    WarriorComponent,
    NotificationListComponent,
    NotificationComponent,
    WarriorDetailComponent,
    MatchupComponent,
    ArraySortPipe
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      warriors: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
