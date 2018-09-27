import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridsterModule } from 'angular-gridster2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyWidgetComponent1Component } from './my-widget-component1/my-widget-component1.component';
import { MyWidgetComponent2Component } from './my-widget-component2/my-widget-component2.component';
import { MyWidgetComponent3Component } from './my-widget-component3/my-widget-component3.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
    MyWidgetComponent1Component,
    MyWidgetComponent2Component,
    MyWidgetComponent3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
