import {WarriorComponent} from './warrior.component';

let component: WarriorComponent;

describe('WarriorComponent', () => {
  beforeEach(() => {
    component = new WarriorComponent();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should set the cssClass prop to empty by default', () => {
    component.ngOnInit();
    expect(component.cssClass).toEqual('');
  });

  it('should set the cssClass prop if isSmall is specified', () => {
    component.isSmall = true;
    component.ngOnInit();
    expect(component.cssClass).toEqual('dm-warrior--small');
  });

});
