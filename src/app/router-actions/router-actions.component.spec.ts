import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterActionsComponent } from './router-actions.component';

describe('RouterActionsComponent', () => {
  let component: RouterActionsComponent;
  let fixture: ComponentFixture<RouterActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
