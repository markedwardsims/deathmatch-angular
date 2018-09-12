import {instance, mock, resetCalls, verify} from 'ts-mockito';
import {AppState} from './app.state';
import {WebsocketService} from '@services/websocket/websocket.service';
import {WarriorsEffects} from '@effects/warriors/warriors.effects';
import {ReplaySubject} from 'rxjs';
import {Action} from '@ngrx/store';
import * as WarriorsActions from '@actions/warriors/warriors.actions';

let effect: WarriorsEffects;
let actions: ReplaySubject<Action>;
let websocketService: WebsocketService;

const mockWebsocketService: WebsocketService = mock(WebsocketService);

describe('Warriors effects', () => {
  beforeEach(() => {
    actions = actions = new ReplaySubject(1);
    websocketService = instance(mockWebsocketService);
    effect = new WarriorsEffects(actions, websocketService);
  });

  it('should create the effect', () => {
    expect(effect).toBeTruthy();
  });

  it('should emit the selection with the websocket service', (done) => {
    actions.next(new WarriorsActions.SelectOpponent(99));
    effect.selectOpponent$.subscribe(value => {
      verify(mockWebsocketService.emitWarriorSelection(99)).once();
      done();
    });
  });

  it('should set opponents', (done) => {
    actions.next(new WarriorsActions.SelectOpponent(99));
    effect.selectOpponent$.subscribe(value => {
      const setOpponentsAction = new WarriorsActions.SetOpponents();
      expect(value).toEqual(setOpponentsAction);
      done();
    });
  });

  afterEach(() => {
    resetCalls(mockWebsocketService);
  });

});
