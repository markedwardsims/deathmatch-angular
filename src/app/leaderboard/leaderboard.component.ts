import { Component, OnInit } from '@angular/core';
import { DeathmatchApiService } from '../deathmatch-api.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: [
    './leaderboard.component.scss',
    '../../../node_modules/deathmatch-components/dist/components/table/table.css'
  ]
})
export class LeaderboardComponent implements OnInit {
  warriors: any[] = [];

  constructor(private _deathmatchApiService: DeathmatchApiService) {}

  ngOnInit() {
    this.warriors = this._deathmatchApiService.getAllWarriors();
  }
}
