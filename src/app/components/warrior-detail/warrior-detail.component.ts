import {Component, Input} from '@angular/core';
import {WarriorModel} from '../../models/warrior.model';

@Component({
  selector: 'app-warrior-detail',
  templateUrl: './warrior-detail.component.html',
  styleUrls: [
    '../../../../node_modules/deathmatch-components/dist/components/warriorDetail/warriorDetail.css'
  ]
})
export class WarriorDetailComponent {
  @Input() warrior: WarriorModel;
}
