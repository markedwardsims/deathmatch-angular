import {Component, OnInit} from '@angular/core';
import {Warrior} from '@interfaces/warrior';

@Component({
  selector: 'app-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: [
    './matchup.component.scss'
  ]
})
export class MatchupComponent implements OnInit {
  opponent1: object;
  opponent2: object;

  constructor() {}

  ngOnInit() {
    const warriors = [];
    this.opponent1 = null; // warriors[0];
    this.opponent2 = null; //warriors[1];
  }

  selectOpponent(warrior: Warrior) {
    // this._deathmatchApiService.incrementWarrior(warrior);
  }

}
