import {AppComponent} from './app.component';

let component: AppComponent;

describe('AppComponent', () => {
  beforeEach(() => {
    component = new AppComponent();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
