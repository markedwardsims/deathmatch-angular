import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {map, mapTo, tap} from 'rxjs/operators';
import {WebsocketService} from '@services/websocket/websocket.service';
import * as WarriorsActions from '@actions/warriors/warriors.actions';
import {PayloadAction} from '@interfaces/payload-action';

@Injectable()
export class WarriorsEffects {

  constructor(private actions$: Actions, private websocketService: WebsocketService) {}

  @Effect()
  selectOpponent$: Observable<Action> =
    this.actions$.pipe(
      ofType(WarriorsActions.SELECT_OPPONENT),
      map( (action: PayloadAction) => action.payload ),
      tap(payload => this.websocketService.emitWarriorSelection(payload)),
      mapTo(new WarriorsActions.SetOpponents()
    )
  );

}
