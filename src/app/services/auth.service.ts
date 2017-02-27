import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { AuthResponse } from '../types/AuthResponse';

const Parse: any = require('parse');

@Injectable()
export class AuthService {
    private subject = new ReplaySubject<AuthResponse>();

    constructor(){
        Parse.initialize("3fa85ab2-ad63-482d-9071-0c8865867704");
        Parse.serverURL = 'https://climbers4climbers.herokuapp.com/parse';
    }

    login() {
        const self = this;
        Parse.User.logIn('jan.kuta@email.cz', 'password').then(
            function success(user) {
                console.log("Logged in ", user);
                self.subject.next({token: "token", username: "jan.kuta@email.cz", nickname: "Kutik" });
            }, 
            function error(err) {
                console.error("Error: " + err.code + " " + err.message);
                self.subject.next(null);
            }
        );

    }

    logout(){
        this.subject.next(null);
    }

    init(){
        this.subject.next(null);
    }

    getAuthObsevable(): Observable<AuthResponse>{
        return this.subject.asObservable();
    }

}
