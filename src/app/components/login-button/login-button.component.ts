import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html'
})
export class LoginButtonComponent implements OnInit, OnDestroy {

    private visible: boolean;
    private subscription: Subscription;

    constructor(private authService: AuthService, private changeDetectorRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.subscription = this.authService.getAuthObsevable().subscribe( authResponse => {
            if (authResponse) {
                this.visible = false;
            } else {
                this.visible = true;
            }
            this.changeDetectorRef.detectChanges();
        });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
