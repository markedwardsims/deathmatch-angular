import {HomePage} from "./page-objects/home-page.po";

let page: HomePage;

let previousWins;
let updatedWins;
let opponentName;

describe('Home page', () => {

  beforeAll(() => {
    page = new HomePage();
    return page.navigateTo();
  });

  it('should display welcome message');

  it('should remove the welcome message on click');

  it('should render second opponent image', () => {
    expect(page.opponent2Image.isPresent()).toBeTruthy();
  });

  it('should render second opponent win count', () => {
    expect(page.opponent2Wins.isPresent()).toBeTruthy();
  });

  it('should render second opponent name', () => {
    expect(page.opponent2Name.isPresent()).toBeTruthy();
  });

  it('should render first opponent image', () => {
    expect(page.opponent1Image.isPresent()).toBeTruthy();
  });

  it('should render first opponent win count', () => {
    expect(page.opponent1Wins.isPresent()).toBeTruthy();
  });

  it('should render first opponent name', () => {
    return page.opponent1Name.getText().then(name => {
      opponentName = name;
      expect(name).toBeTruthy();
    })
  });

  it('should get initial leaderboard wins for the first opponent', () => {
    page.getLeaderboardWins(opponentName).getText().then(wins => {
      previousWins = parseInt(wins);
      expect(wins).toBeTruthy();
    });
  });

  it('should click on the first opponent', () => {
    return page.opponent1.click();
  });

  it('should reflect the incremented win count for first opponent in the leaderboard', () => {
    page.getLeaderboardWins(opponentName).getText().then(wins => {
      updatedWins = parseInt(wins);
      expect(updatedWins).toBe(previousWins + 1);
    });
  });

});
