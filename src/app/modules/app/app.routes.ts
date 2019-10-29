import {Routes} from '@angular/router';
import {IsStdUserGuard} from '../auth/guards/is-std-user.guard';
import {IsAdminUserGuard} from '../auth/guards/is-admin-user.guard';
import {AppComponent} from './app.component';
import {adminRoutes} from './admin/admin.routes';
import {homeRoutes} from './home/home.routes';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'home',
                children: homeRoutes,
                canActivate: [IsStdUserGuard]
            },
            {
                path: 'admin',
                children: adminRoutes,
                canActivate: [IsAdminUserGuard]
            }
        ]
    }
];
