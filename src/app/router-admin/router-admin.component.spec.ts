import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterAdminComponent } from './router-admin.component';

describe('RouterAdminComponent', () => {
  let component: RouterAdminComponent;
  let fixture: ComponentFixture<RouterAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
