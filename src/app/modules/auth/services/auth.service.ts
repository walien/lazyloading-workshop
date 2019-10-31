import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user.model';
import {tap} from 'rxjs/operators';
import * as db from './users.db';

@Injectable()
export class AuthService {

    private readonly userEvents: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    public authenticate(login: string, password: string): Observable<User> {
        return this.findMatchingUser(login, password)
            .pipe(
                tap(user => this.userEvents.next(user))
            );
    }

    public getUsersEvents(): BehaviorSubject<User> {
        return this.userEvents;
    }

    public logout(): void {
        this.userEvents.next(null);
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
