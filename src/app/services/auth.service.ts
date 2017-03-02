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
        Parse.User.logIn('jan.kuta@email.cz', 'password').then(
            (user) => {
                console.log("Logged in ", user);
                this.subject.next({token: "token", username: "jan.kuta@email.cz", nickname: "Kutik" });
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
        this.subject.next(null);
    }

    getAuthObsevable(): Observable<AuthResponse>{
        return this.subject.asObservable();
    }

}
