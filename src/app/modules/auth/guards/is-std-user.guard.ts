import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {AbstractUserGuard} from './abstract-user.guard';
import {Observable} from 'rxjs';

@Injectable()
export class IsStdUserGuard extends AbstractUserGuard implements CanLoad {

    constructor(authService: AuthService, router: Router) {
        super(authService, router, 'IsStdUserGuard', ['STD', 'ADMIN']);
    }

    public canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
        return this.check(route.path);
    }
}
