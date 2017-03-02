import { Component, OnInit } from '@angular/core';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  providers: [ AlertService, AuthService ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    loggedIn: boolean;
    loginDialogOpened: boolean;

    constructor(private authService: AuthService){

    }

    ngOnInit() {
        console.log("appComponent init");
        this.authService.init();
        this.loggedIn = false;
        this.loginDialogOpened = false;
    }
}
