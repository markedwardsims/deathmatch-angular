import {Component, OnInit} from '@angular/core';
import {WarriorInterface} from '../warrior.interface';

@Component({
  selector: 'app-warriors-list',
  templateUrl: './warriors-list.component.html',
  styleUrls: [
    '../../../node_modules/deathmatch-components/dist/components/inlineList/inlineList.css'
  ]
})
export class WarriorsListComponent implements OnInit {
  warriors: WarriorInterface[] = [];

  constructor() {}

  ngOnInit() {
    this.warriors = [];
  }

}
