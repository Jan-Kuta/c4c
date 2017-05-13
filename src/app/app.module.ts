import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule} from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/header/login-dialog/login.component';
import { LoginButtonComponent } from './components/header/login-button/login-button.component';
import { LogoutButtonComponent } from './components/header/logout-button/logout-button.component';
import { HeaderComponent } from './components/header/header.component';

import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { PofileButtonComponent } from './components/header/pofile-button/pofile-button.component';
import { GuidebookComponent } from './components/guidebook/guidebook.component';
import { ArticleComponent } from './components/article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    HeaderComponent,
    PofileButtonComponent,
    GuidebookComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ AlertService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
