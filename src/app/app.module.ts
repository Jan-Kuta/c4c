import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { RegisterButtonComponent } from './components/register-button/register-button.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    RegisterButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
