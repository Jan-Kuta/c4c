import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import { Observable, ReplaySubject } from 'rxjs';
import { AuthResponse } from '../types/AuthResponse';

//declare var Parse: any;

@Injectable()
export class AuthService {
    private subject = new ReplaySubject<AuthResponse>();

    constructor(){
        Parse.initialize("3fa85ab2-ad63-482d-9071-0c8865867704");
        Parse.serverURL = 'https://climbers4climbers.herokuapp.com/parse';
    }

    login() {
        this.subject.next({token: "token", username: "jan.kuta@email.cz", nickname: "Kutik" });
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
