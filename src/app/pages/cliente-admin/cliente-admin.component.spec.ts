import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteAdminComponent } from './cliente-admin.component';
import { Component } from '@angular/core';


describe('ClienteAdminComponent', () => {
  let component: ClienteAdminComponent;
  let fixture: ComponentFixture<ClienteAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




