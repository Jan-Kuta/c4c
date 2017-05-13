import { AlertService } from './alert.service';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { CurrentUser } from '../shared/CurrentUser';

const Parse: any = require('parse');
const Hello: any = require('hellojs');

@Injectable()
export class AuthService {
    private subject = new ReplaySubject<CurrentUser>();

    constructor(private alertService: AlertService) {
        Parse.initialize('3fa85ab2-ad63-482d-9071-0c8865867704');
        Parse.serverURL = 'https://climbers4climbers.herokuapp.com/parse';

        Hello.init({
            facebook: '1162399500488752',
            twitter: 'Z5NdGpWqQ9cbZCucoDxSj4Myy',
            google: '49164558893-c736h9vt0ge4o2u6b2ieabv5kdats72r.apps.googleusercontent.com'
        });

        Hello.on('auth.login', function(auth) {
            // Call user information, for the given network
            console.log('auth: ', auth);
            Hello(auth.network).api('me').then(function(r) {
                console.log(auth);
                console.log(r);
                const user = new Parse.User();
                user._linkWith(auth.network, {
                            id: auth.authResponse.client_id,
                            access_token: auth.authResponse.access_token,
                            expiration_date: '2017-05-13T19:50:00.000Z'
                    }).then(function(user){
                    console.log('You are logged in successfully.');
                    this.alertService.success('You are logged in successfully.');
                    this.subject.next(this.parseUser2CurrentUser(user));
                });
            });
        });
/*
        (<any>window).fbAsyncInit = function() {
            Parse.FacebookUtils.init({ // this line replaces FB.init({
            appId      : '1162399500488752', // Facebook App ID
            status     : true,  // check Facebook Login status
            cookie     : true,  // enable cookies to allow Parse to access the session
            xfbml      : true,  // initialize Facebook social plugins on the page
            version    : 'v2.3' // point to the latest Facebook Graph API version
            });

                // Run code after the Facebook SDK is loaded.
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));*/
    }

    loginFacebook() {
        Hello('facebook').login();
        /*Parse.FacebookUtils.logIn('email', {
            success: function(user) {
                if (!user.existed()) {
                    this.alertService.success('User signed up and logged in through Facebook!');
                } else {
                    this.alertService.success('User logged in through Facebook!');
                }
                this.subject.next(this.parseUser2CurrentUser(user));
            },
            error: function(user, error) {
                console.error('Error: ' + error.code + ' ' + error.message);
                this.alertService.error('User cancelled the Facebook login or did not fully authorize.');
                this.subject.next(null);
            }
        });*/
    }

    loginTwitter() {
        Hello('twitter').login();
    }

    loginGoogle() {
        Hello('google').login();
    }

    login(email: string, password: string) {
        Parse.User.logIn(email, password).then(
            (user) => {
                this.alertService.success('You are logged in successfully.');
                this.subject.next(this.parseUser2CurrentUser(user));
            },
            (err) => {
                console.error('Error: ' + err.code + ' ' + err.message);
                this.alertService.error(err.message);
                this.subject.next(null);
            }
        );
    }

    logout() {
        Parse.User.logOut().then((user) => {
            this.subject.next(null);
        },
        (err) => {
                console.error('Error: ' + err.code + ' ' + err.message);
                this.subject.next(null);
            }
        );
    }

    init() {
        this.subject.next(this.getCurrentUser());
    }

    getAuthObsevable(): Observable<CurrentUser> {
        return this.subject.asObservable();
    }

    isAuthenticated() {
        const currentUser = Parse.User.current();
        if (currentUser) {
            return true;
        }
        return false;
    }

    getCurrentUser() {
        const parseUser = Parse.User.current();
        return this.parseUser2CurrentUser(parseUser);
    }

    private parseUser2CurrentUser(parseUser: any) {
        if (parseUser) {
            return {
                email: parseUser.get('email'),
                username: parseUser.get('username'),
                nickname: parseUser.get('nickname'),
                avatar: parseUser.get('avatar')._url
            };
        } else {
            return null;
        }
    }

}
