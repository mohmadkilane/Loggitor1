import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsPageComponent } from './app-details-page.component';

describe('AppDetailsPageComponent', () => {
  let component: AppDetailsPageComponent;
  let fixture: ComponentFixture<AppDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
