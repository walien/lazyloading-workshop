import {Component, OnInit} from '@angular/core';
import {filter} from 'rxjs/operators';
import {User} from '../../../auth/model/user.model';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

    public user: User;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.userEvents
            .pipe(filter(user => user !== undefined))
            .subscribe(user => this.user = user);
    }

    public logout(): void {
        this.authService.logout();
    }
}
