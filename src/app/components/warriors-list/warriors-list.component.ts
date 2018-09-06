import {Component, OnInit} from '@angular/core';
import {Warrior} from '@interfaces/warrior';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-warriors-list',
  templateUrl: './warriors-list.component.html',
  styleUrls: [
    '../../../../node_modules/deathmatch-components/dist/components/inlineList/inlineList.css'
  ]
})
export class WarriorsListComponent implements OnInit {
  warriors: Observable<Warrior[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.warriors = this.store.pipe(select((state: any) => state.warriors.allWarriors));
  }

}
