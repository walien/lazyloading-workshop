import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {AbstractUserGuard} from './abstract-user.guard';

@Injectable()
export class IsStdUserGuard extends AbstractUserGuard implements CanActivate {

    constructor(authService: AuthService, router: Router) {
        super(authService, router, 'IsStdUserGuard', ['STD', 'ADMIN']);
    }
}
