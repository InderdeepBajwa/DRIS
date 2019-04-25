import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VisualizeComponent } from './core/visualize/visualize.component';
import { TemplateComponent } from './core/visualize/template/template.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { SaveHistoryComponent } from './user/save-history/save-history.component';
//import { LoginComponent } from './core/auth/login/login.component';

// Login
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'new', component: TemplateComponent },
  { path: 'visualize', component: VisualizeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'history', canActivate: [AuthGuard], component: SaveHistoryComponent },
  //{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
  ]
})
export class AppRoutingModule { }
