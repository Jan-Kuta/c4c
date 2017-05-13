import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html'
})
export class LogoutButtonComponent implements OnInit, OnDestroy {

    private visible: boolean;
    private subscription: Subscription;

    constructor(private authService: AuthService, private changeDetectorRef: ChangeDetectorRef, private router: Router) { }

    ngOnInit() {
        this.subscription = this.authService.getAuthObsevable().subscribe( authResponse => {
            if (authResponse) {
                this.visible = true;
            } else {
                this.visible = false;
            }
            this.changeDetectorRef.detectChanges();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
