import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  test(message: string){
    this.alertService.error(message);
  }

  test2(message: string){
    this.alertService.success(message);
  }

}
