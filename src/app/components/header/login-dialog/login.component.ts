import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public visible = false;
  private visibleAnimate = false;
  private myForm: FormGroup;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      'password': ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  facebookLogin() {
      this.authService.loginFacebook();
  }

  twitterLogin() {
      this.authService.loginTwitter();
  }

  googleLogin() {
      this.authService.loginGoogle();
  }

  login() {
      this.authService.login(this.myForm.controls['email'].value, this.myForm.controls['password'].value);
      this.hide();
  }

}
