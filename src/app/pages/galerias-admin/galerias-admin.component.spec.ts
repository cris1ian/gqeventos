import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriasAdminComponent } from './galerias-admin.component';

describe('GaleriasAdminComponent', () => {
  let component: GaleriasAdminComponent;
  let fixture: ComponentFixture<GaleriasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
