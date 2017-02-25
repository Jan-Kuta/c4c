import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html'
})
export class LogoutButtonComponent implements OnInit {

    private visible: boolean = true;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        console.log("Logout button init");
        this.authService.getAuthObsevable().subscribe( authResponse => {
            if (authResponse){
                this.visible = true;
            }
            else{
                this.visible = false;
            }
        });
    }
}
