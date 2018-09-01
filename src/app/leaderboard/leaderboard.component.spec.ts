import {LeaderboardComponent} from './leaderboard.component';

let component: LeaderboardComponent;

describe('LeaderboardComponent', () => {
  beforeEach(() => {
    component = new LeaderboardComponent();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
