import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridsterModule } from 'angular-gridster2';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyWidgetComponent1Component } from './my-widget-component1/my-widget-component1.component';
import { MyWidgetComponent2Component } from './my-widget-component2/my-widget-component2.component';
import { MyWidgetComponent3Component } from './my-widget-component3/my-widget-component3.component';
import { NavigateAwayComponent } from './navigate-away/navigate-away.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
    MyWidgetComponent1Component,
    MyWidgetComponent2Component,
    MyWidgetComponent3Component,
    NavigateAwayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
