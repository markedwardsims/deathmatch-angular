import {MatchupComponent} from './matchup.component';

let component: MatchupComponent;

describe('MatchupComponent', () => {
  beforeEach(() => {
    component = new MatchupComponent();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
