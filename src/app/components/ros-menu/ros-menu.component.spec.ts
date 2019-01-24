import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosMenuComponent } from './ros-menu.component';

describe('RosMenuComponent', () => {
  let component: RosMenuComponent;
  let fixture: ComponentFixture<RosMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
