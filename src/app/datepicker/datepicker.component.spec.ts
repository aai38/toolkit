import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {MaterialModule} from '../material.module';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import Datepicker  from './datepicker.component';

describe('Datepicker', () => {
  let component: Datepicker;
  let fixture: ComponentFixture<Datepicker>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Datepicker ],
      imports: [IonicModule.forRoot(), MaterialModule.forRoot(), CommonModule, NgModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Datepicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
