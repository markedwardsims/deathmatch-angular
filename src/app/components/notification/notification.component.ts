import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: [
    '../../../../node_modules/deathmatch-components/dist/components/notification/notification.css'
  ]
})
export class NotificationComponent {
  @Input() type: string;
  @Input() message: string;
}
