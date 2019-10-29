import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';

export abstract class AbstractGuard {

    protected constructor(private authService: AuthService, private router: Router, private requiredRoles: string[]) {
    }

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return new Observable<boolean>(observer => {
            this.authService.userEvents
                .pipe(
                    filter(user => user !== undefined),
                    tap(user => console.log(`is-${this.requiredRoles}-user guard invoked `, user)),
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
