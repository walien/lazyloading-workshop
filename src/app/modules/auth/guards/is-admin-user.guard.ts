import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {AbstractGuard} from './abstract.guard';

@Injectable()
export class IsAdminUserGuard extends AbstractGuard implements CanActivate {

    constructor(authService: AuthService, router: Router) {
        super(authService, router, ['ADMIN']);
    }
}
