import {Component, OnInit} from '@angular/core';
import {User} from '../auth/model/user.model';
import {AuthService} from '../auth/services/auth.service';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public user: User;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.getUsersEvents()
            .pipe(filter(user => user !== undefined))
            .subscribe(user => this.user = user);
    }
}
