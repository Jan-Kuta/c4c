import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { CurrentUser } from '../../shared/CurrentUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  private currentUser: CurrentUser;


  constructor(private alertService: AlertService, private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }

  test(message: string) {
    this.alertService.error(message);
  }

  test2(message: string) {
    this.alertService.success(message);
  }

}
