import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {filter, tap} from 'rxjs/operators';

@Injectable()
export class IsStdUserGuard implements CanActivate {

    constructor(private readonly authService: AuthService) {
    }

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return new Observable<boolean>(observer => {
            this.authService.userEvents
                .pipe(
                    filter(user => user !== undefined),
                    tap(user => console.log('is-std-user guard invoked ', user))
                )
                .subscribe(user => {
                    observer.next(user !== null && user.role === 'STD');
                    observer.complete();
                });
        });
    }
}
