import {Component, OnInit} from '@angular/core';
import { DeathmatchApiService } from '../deathmatch-api.service';

@Component({
  selector: 'app-warriors-list',
  templateUrl: './warriors-list.component.html',
  styleUrls: [
    '../../../node_modules/deathmatch-components/dist/components/inlineList/inlineList.css'
  ]
})
export class WarriorsListComponent implements OnInit {
  warriors: any[] = [];

  constructor(private _deathmatchApiService: DeathmatchApiService) {}

  ngOnInit() {
    this.warriors = this._deathmatchApiService.getAllWarriors();
  }

}
