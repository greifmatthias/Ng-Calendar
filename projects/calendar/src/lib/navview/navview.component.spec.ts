import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavviewComponent } from './navview.component';

describe('NavviewComponent', () => {
  let component: NavviewComponent;
  let fixture: ComponentFixture<NavviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
