import {Component, OnInit} from '@angular/core';
import {Warrior} from '@interfaces/warrior';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: [
    './leaderboard.component.scss',
    '../../../../node_modules/deathmatch-components/dist/components/table/table.css'
  ]
})
export class LeaderboardComponent implements OnInit {
  warriors: Observable<Warrior[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.warriors = this.store.pipe(select((state: any) => state.warriors.allWarriors));
  }

}
