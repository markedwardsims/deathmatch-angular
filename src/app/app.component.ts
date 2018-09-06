import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './app.state';
import * as WarriorsActions from '@actions/warriors.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../node_modules/deathmatch-components/dist/components/sidebar/sidebar.css'
  ],
  providers: []
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new WarriorsActions.SetOpponents());
  }
}
