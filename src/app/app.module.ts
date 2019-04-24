import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ProfileComponent } from './core/auth/profile/profile.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { SaveHistoryComponent } from './user/save-history/save-history.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './core/consume/api.service';
import { VisualGenerateComponent } from './core/consume/visual-generate/visual-generate.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorage, AngularFireStorageModule, StorageBucket } from '@angular/fire/storage'

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
    PrevchartComponent,
    ProfileComponent,
    CallbackComponent,
    SaveHistoryComponent,
    VisualGenerateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GoogleChartsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(
      {
        provider: false,
        firebase: {apiKey: "AIzaSyAhY7PHvOAZmAPjVXaFz3oT_6CRNHlVJbg",
        authDomain: "paychex-c1894.firebaseapp.com",
        databaseURL: "https://paychex-c1894.firebaseio.com",
        projectId: "paychex-c1894",
        storageBucket: "paychex-c1894.appspot.com",
        messagingSenderId: "348557116375"
      }
      }
    ),
    AngularFireStorageModule,
  ],
  providers: [
    AuthServService,
    ApiService,
    {
      provide: StorageBucket,
      useValue: 'paychex-c1894.appspot.com'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
