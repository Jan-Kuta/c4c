import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html'
})
export class LoginButtonComponent implements OnInit {
    private visible: boolean = true;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        console.log("Login button init");
        this.authService.getAuthObsevable().subscribe( authResponse => {
            if (authResponse){
                this.visible = false;
            }
            else{
                this.visible = true;
            }
        });
    }

}
