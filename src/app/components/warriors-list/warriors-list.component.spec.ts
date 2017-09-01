import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorsListComponent } from './warriors-list.component';

describe('WarriorsListComponent', () => {
  let component: WarriorsListComponent;
  let fixture: ComponentFixture<WarriorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarriorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarriorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
