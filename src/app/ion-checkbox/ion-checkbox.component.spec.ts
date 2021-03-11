import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material.module';

import  IonCheckboxComponent  from './ion-checkbox.component';
import {NgModule} from '@angular/core';

describe('IonCheckboxComponent', () => {
  let component: IonCheckboxComponent;
  let fixture: ComponentFixture<IonCheckboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IonCheckboxComponent ],
      imports: [IonicModule.forRoot(), MaterialModule.forRoot(), NgModule]
    }).compileComponents();

    fixture = TestBed.createComponent(IonCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
