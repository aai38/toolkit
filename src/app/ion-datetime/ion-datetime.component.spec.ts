import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {MaterialModule} from '../material.module';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import IonDate  from './ion-datetime.component';

describe('IonDate', () => {
  let component: IonDate;
  let fixture: ComponentFixture<IonDate>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IonDate ],
      imports: [IonicModule.forRoot(), MaterialModule.forRoot(), CommonModule, NgModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(IonDate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
