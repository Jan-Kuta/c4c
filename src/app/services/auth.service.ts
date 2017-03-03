import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { CurrentUser } from '../shared/CurrentUser';

const Parse: any = require('parse');

@Injectable()
export class AuthService {
    private subject = new ReplaySubject<CurrentUser>();

    constructor(){
        Parse.initialize("3fa85ab2-ad63-482d-9071-0c8865867704");
        Parse.serverURL = 'https://climbers4climbers.herokuapp.com/parse';
    }

    login() {
        Parse.User.logIn('jan.kuta@email.cz', 'password').then(
            (user) => {
                this.subject.next(this.parseUser2CurrentUser(user));
            }, 
            (err) => {
                console.error("Error: " + err.code + " " + err.message);
                this.subject.next(null);
            }
        );
    }

    logout() {
        Parse.User.logOut().then((user) => {
            console.log("Loggout: ", user);
            this.subject.next(null);
        },
        (err) => {
                console.error("Error: " + err.code + " " + err.message);
                this.subject.next(null);
            }
        );
    }

    init() {
        this.subject.next(this.getCurrentUser());
    }

    getAuthObsevable(): Observable<CurrentUser>{
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

    private parseUser2CurrentUser(parseUser: any){
        if (parseUser) {
            return { email: parseUser.get("email"), username: parseUser.get("username"), nickname: parseUser.get("nickname"), avatar: parseUser.get("avatar")._url};
        } else {
            return null;
        }
    }

}
