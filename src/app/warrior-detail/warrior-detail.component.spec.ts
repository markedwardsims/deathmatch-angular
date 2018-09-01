import {WarriorDetailComponent} from './warrior-detail.component';

let component: WarriorDetailComponent;

describe('WarriorDetailComponent', () => {
  beforeEach(() => {
    component = new WarriorDetailComponent();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
