import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-pofile-button',
  templateUrl: './pofile-button.component.html'
})
export class PofileButtonComponent implements OnInit, OnDestroy {

  private visible: boolean;
  private subscription: Subscription;

  constructor(private authService: AuthService, private changeDetectorRef: ChangeDetectorRef) { }

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

}
