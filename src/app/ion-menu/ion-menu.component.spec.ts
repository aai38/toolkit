import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material.module';

import  IonMenuComponent  from './ion-menu.component';

describe('IonMenuComponent', () => {
  let component: IonMenuComponent;
  let fixture: ComponentFixture<IonMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IonMenuComponent ],
      imports: [IonicModule.forRoot(), CommonModule, ReactiveFormsModule, MaterialModule, NgModule]
    }).compileComponents();

    fixture = TestBed.createComponent(IonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
