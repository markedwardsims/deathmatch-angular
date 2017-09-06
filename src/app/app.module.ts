import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DeathmatchApiService } from './deathmatch-api.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { WarriorsListComponent } from './warriors-list/warriors-list.component';
import { WarriorComponent } from './warrior/warrior.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationComponent } from './notification/notification.component';
import { WarriorDetailComponent } from './warrior-detail/warrior-detail.component';
import { MatchupComponent } from './matchup/matchup.component';
import { ArraySortPipe } from './array-sort.pipe';

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
    BrowserModule
  ],
  providers: [DeathmatchApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
