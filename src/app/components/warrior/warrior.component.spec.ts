import {WarriorComponent} from './warrior.component';

let component: WarriorComponent;

describe('WarriorComponent', () => {
  beforeEach(() => {
    component = new WarriorComponent();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
