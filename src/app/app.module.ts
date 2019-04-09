import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './partials/nav/nav.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VisualizeComponent } from './core/visualize/visualize.component';

// Authentication service
import { AuthServService } from './core/auth/auth-serv.service';
import { LoginComponent } from './core/auth/login/login.component';
import { TemplateComponent } from './core/visualize/template/template.component';
import { SidebarComponent } from './core/visualize/template/sidebar/sidebar.component';
import { ChartComponent } from './core/visualize/chart/chart.component';
import { PrevchartComponent } from './core/visualize/template/prevchart/prevchart.component';

// Charting service
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    VisualizeComponent,
    LoginComponent,
    TemplateComponent,
    SidebarComponent,
    ChartComponent,
    PrevchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule
  ],
  providers: [AuthServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
