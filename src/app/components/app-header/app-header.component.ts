import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../modules/auth/services/auth.service';
import {filter} from 'rxjs/operators';
import {User} from '../../modules/auth/model/user.model';

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
            .pipe(filter(user => user !== undefined && user !== null))
            .subscribe(user => this.user = user);
    }
}
