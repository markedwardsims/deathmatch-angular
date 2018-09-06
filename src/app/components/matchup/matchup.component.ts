import {Component, OnInit} from '@angular/core';
import {Warrior} from '@interfaces/warrior';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: [
    './matchup.component.scss'
  ]
})
export class MatchupComponent implements OnInit {
  opponent1: Observable<Warrior>;
  opponent2: Observable<Warrior>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.opponent1 = this.store.pipe(select((state: any) => state.warriors.opponent1));
    this.opponent2 = this.store.pipe(select((state: any) => state.warriors.opponent2));
  }

  selectOpponent(warrior: Warrior) {
    // this._deathmatchApiService.incrementWarrior(warrior);
  }

}
