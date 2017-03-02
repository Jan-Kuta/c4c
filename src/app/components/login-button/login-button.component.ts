import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html'
})
export class LoginButtonComponent implements OnInit {

    private visible: boolean;

    constructor(private authService: AuthService, private changeDetectorRef: ChangeDetectorRef) { }

    ngOnInit() {
        console.log("Login button init");
        this.authService.getAuthObsevable().subscribe( authResponse => {
            if (authResponse){
                this.visible = false;
            }
            else{
                this.visible = true;
            }
            this.changeDetectorRef.detectChanges();
        });
    }

}
