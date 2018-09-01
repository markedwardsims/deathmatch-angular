import {Component, OnInit} from '@angular/core';
import {WarriorInterface} from '@interfaces/warrior.interface';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: [
    './leaderboard.component.scss',
    '../../../../node_modules/deathmatch-components/dist/components/table/table.css'
  ]
})
export class LeaderboardComponent implements OnInit {
  warriors: WarriorInterface[] = [];

  constructor() {}

  ngOnInit() {
    this.warriors = [];
  }
}
