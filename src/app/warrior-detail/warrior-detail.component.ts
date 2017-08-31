import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-warrior-detail',
  templateUrl: './warrior-detail.component.html',
  styleUrls: [
    '../../../node_modules/deathmatch-components/dist/components/warriorDetail/warriorDetail.css'
  ]
})
export class WarriorDetailComponent {
  @Input() warrior: object;
}
