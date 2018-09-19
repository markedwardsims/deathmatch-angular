import {browser, by, element} from 'protractor';

const selectors = {
  leaderboardRow:   '.leaderboard .dm-table__row',
  warriorDetail:    'app-warrior-detail',
  warriorWins:      '.dm-text-right',
  warriorImage:     '.dm-warrior',
  warriorName:      '.dm-warrior-detail__name'
};

export class HomePage {

  opponent1 = element.all(by.css(selectors.warriorDetail)).get(0);
  opponent2 = element.all(by.css(selectors.warriorDetail)).get(1);

  navigateTo() {
    return browser.get('/');
  }

  getLeaderboardWins(opponentName) {
    return element(by.cssContainingText(selectors.leaderboardRow, opponentName))
      .getWebElement()
      .findElement(by.css(selectors.warriorWins));
  }

  get opponent1Image() {
    return this.opponent1.element(by.css(selectors.warriorImage));
  }

  get opponent1Name() {
    return this.opponent1.element(by.css(selectors.warriorName));
  }

  get opponent1Wins() {
    return this.opponent1.element(by.css(selectors.warriorName));
  }

  get opponent2Image() {
    return this.opponent2.element(by.css(selectors.warriorImage));
  }

  get opponent2Name() {
    return this.opponent2.element(by.css(selectors.warriorName));
  }

  get opponent2Wins() {
    return this.opponent2.element(by.css(selectors.warriorName));
  }

}
