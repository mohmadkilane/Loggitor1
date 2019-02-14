import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleDefectsComponent } from './handle-defects.component';

describe('HandleDefectsComponent', () => {
  let component: HandleDefectsComponent;
  let fixture: ComponentFixture<HandleDefectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleDefectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleDefectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
