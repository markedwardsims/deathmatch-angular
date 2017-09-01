import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DeathmatchApiService } from './services/deathmatch-api.service';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { WarriorsListComponent } from './components/warriors-list/warriors-list.component';
import { WarriorComponent } from './components/warrior/warrior.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { NotificationComponent } from './components/notification/notification.component';
import { WarriorDetailComponent } from './components/warrior-detail/warrior-detail.component';
import { MatchupComponent } from './components/matchup/matchup.component';

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
    MatchupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DeathmatchApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
