import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  @NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [AppRoutingModule,  CommonModule, BrowserModule, IonicModule.forRoot(),  BrowserAnimationsModule, MaterialModule, ChartsModule
    ],
    providers: [
      StatusBar,
      SplashScreen,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      {provide: APP_BASE_HREF, useValue:"/"},
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
  })
  export class AppModule {}