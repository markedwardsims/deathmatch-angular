import {instance, mock} from "ts-mockito";
import {AppState} from "./app.state";
import {WebsocketService} from "@services/websocket/websocket.service";
import {Actions} from "@ngrx/effects";
import {WarriorsEffects} from "@effects/warriors/warriors.effects";

let effect: WarriorsEffects;
let actions: Actions;
let websocketService: WebsocketService;

const mockActions: Actions = mock(Actions);
const mockWebsocketService: WebsocketService = mock(WebsocketService);

describe('AppComponent', () => {
  beforeEach(() => {
    actions = instance(mockActions);
    websocketService = instance(mockWebsocketService);
    effect = new WarriorsEffects(actions, websocketService);
  });

  it('should create the effect', () => {
    expect(effect).toBeTruthy();
  });

});
