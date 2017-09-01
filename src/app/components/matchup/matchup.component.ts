import { Component, OnInit } from '@angular/core';
import { DeathmatchApiService } from '../../services/deathmatch-api.service';

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

  constructor(private _deathmatchApiService: DeathmatchApiService) {}

  ngOnInit() {
    const warriors = this._deathmatchApiService.getAllWarriors();
    this.opponent1 = warriors[0];
    this.opponent2 = warriors[1];
  }

}
