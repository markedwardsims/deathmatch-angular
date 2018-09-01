import {WarriorsListComponent} from './warriors-list.component';

let component: WarriorsListComponent;

describe('WarriorsListComponent', () => {
  beforeEach(() => {
    component = new WarriorsListComponent();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
