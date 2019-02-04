import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverityPercentTableComponent } from './severity-percent-table.component';

describe('SeverityPercentTableComponent', () => {
  let component: SeverityPercentTableComponent;
  let fixture: ComponentFixture<SeverityPercentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverityPercentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverityPercentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
