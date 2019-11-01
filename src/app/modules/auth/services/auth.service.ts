import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user.model';
import {tap} from 'rxjs/operators';
import * as db from './users.db';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private static readonly userEvents: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor() {
        console.log('auth service instantiated');
    }

    public getUsersEvents(): BehaviorSubject<User> {
        return AuthService.userEvents;
    }

    public authenticate(login: string, password: string): Observable<User> {
        return this.findMatchingUser(login, password)
            .pipe(
                tap(user => AuthService.userEvents.next(user))
            );
    }

    public logout(): void {
        AuthService.userEvents.next(null);
    }

    private findMatchingUser(login: string, password: string): Observable<User> {
        return new Observable<User>(observer => {
            const foundUser = db
                .users
                .find(user => user.login === login && user.password === password);
            observer.next(foundUser);
            observer.complete();
        });
    }
}
