import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectLogComponent } from './defect-log.component';

describe('DefectLogComponent', () => {
  let component: DefectLogComponent;
  let fixture: ComponentFixture<DefectLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
