import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-warrior',
  templateUrl: './warrior.component.html',
  styleUrls: [
    '../../../node_modules/deathmatch-components/dist/components/warrior/warrior.css'
  ]
})
export class WarriorComponent implements OnInit {
  @Input() isSmall: boolean;
  @Input() image: string;
  cssClass: string;

  ngOnInit() {
    this.cssClass = (this.isSmall) ? 'dm-warrior--small' : '';
  }

}
