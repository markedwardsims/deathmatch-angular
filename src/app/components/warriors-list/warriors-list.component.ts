import {Component, OnInit} from '@angular/core';
import { DeathmatchApiService } from '../../services/deathmatch-api.service';
import { WarriorModel } from '../../models/warrior.model';

@Component({
  selector: 'app-warriors-list',
  templateUrl: './warriors-list.component.html',
  styleUrls: [
    '../../../../node_modules/deathmatch-components/dist/components/inlineList/inlineList.css'
  ]
})
export class WarriorsListComponent implements OnInit {
  warriors: WarriorModel[] = [];

  constructor(private _deathmatchApiService: DeathmatchApiService) {}

  ngOnInit() {
    this.warriors = this._deathmatchApiService.getAllWarriors();
  }

}
