import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CurrentUser } from './shared/CurrentUser';

@Component({
  selector: 'app-root',
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private authService: AuthService){
    }

    ngOnInit() {
        console.log("appComponent init");
        this.authService.init();
    }
}
