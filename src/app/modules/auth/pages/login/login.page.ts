import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {tap} from 'rxjs/operators';

@Component({
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage {

    public login: string;
    public password: string;

    constructor(private readonly authService: AuthService) {
    }

    public authenticate(login: string, password: string) {
        this.authService
            .authenticate(login, password)
            .pipe(
                tap(user => console.log('authenticated as ', user))
            )
            .subscribe();
    }
}
