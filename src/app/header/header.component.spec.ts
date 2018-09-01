import { HeaderComponent } from './header.component';

let component: HeaderComponent;

describe('HeaderComponent', () => {
  beforeEach(() => {
    component = new HeaderComponent();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
