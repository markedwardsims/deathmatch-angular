import { Component, OnInit } from '@angular/core';
import { DeathmatchApiService } from '../deathmatch-api.service';
import {WarriorModel} from '../warrior.model';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: [
    './leaderboard.component.scss',
    '../../../node_modules/deathmatch-components/dist/components/table/table.css'
  ]
})
export class LeaderboardComponent implements OnInit {
  warriors: WarriorModel[] = [];

  constructor(private _deathmatchApiService: DeathmatchApiService) {}

  ngOnInit() {
    this.warriors = this._deathmatchApiService.getAllWarriors();
  }
}
