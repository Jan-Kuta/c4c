import { Subscription } from 'rxjs/Rx';
import { CurrentUser } from './../../shared/CurrentUser';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private currentUser: CurrentUser;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.getAuthObsevable().subscribe( user => {
            this.currentUser = user;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  authenticated() {
    return this.currentUser != null;
  }

  logout() {
    this.authService.logout();
  }
}
