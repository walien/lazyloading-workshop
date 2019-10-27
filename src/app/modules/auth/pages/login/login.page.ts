import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {User} from '../../model/user.model';

@Component({
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage {

    public login: string;
    public password: string;

    constructor(private readonly authService: AuthService, private router: Router) {
    }

    public authenticate(login: string, password: string) {
        this.authService
            .authenticate(login, password)
            .pipe(
                tap(user => console.log('authenticated as ', user))
            )
            .subscribe(user => this.redirectUser(user));
    }

    private redirectUser(user: User): void {
        if (user.role === 'ADMIN') {
            this.router.navigate(['/admin']);
        } else {
            this.router.navigate(['/home']);
        }
    }
}
