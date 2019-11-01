import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {AbstractUserGuard} from './abstract-user.guard';
import {Observable} from 'rxjs';

@Injectable()
export class IsStdUserGuard extends AbstractUserGuard implements CanActivate {

    constructor(authService: AuthService, router: Router) {
        super(authService, router, 'IsStdUserGuard', ['STD', 'ADMIN']);
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.check(state.url);
    }
}
