import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';

export abstract class AbstractUserGuard {

    protected constructor(private authService: AuthService, private router: Router, private name: string, private requiredRoles: string[]) {
    }

    protected check(url: string): Observable<boolean> {
        return new Observable<boolean>(observer => {
            this.authService.getUsersEvents()
                .pipe(
                    filter(user => user !== undefined),
                    tap(user => console.log(url, `${this.name} invoked `, user)),
                    map(user => user !== null && this.requiredRoles.indexOf(user.role) >= 0),
                    tap(hasRequiredRole => {
                        observer.next(hasRequiredRole);
                        observer.complete();
                    })
                )
                .subscribe(hasRequiredRole => {
                    if (!hasRequiredRole) {
                        this.router.navigate(['/']);
                    }
                });
        });
    }
}
