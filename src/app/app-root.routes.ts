import {Routes} from '@angular/router';
import {appRoutes} from './modules/app/app.routes';
import {authRoutes} from './modules/auth/auth.routes';

export const appRootRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        children: authRoutes
    },
    {
        path: 'app',
        children: appRoutes
    }
];
