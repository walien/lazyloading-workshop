import {Routes} from '@angular/router';
import {IsStdUserGuard} from '../auth/guards/is-std-user.guard';
import {IsAdminUserGuard} from '../auth/guards/is-admin-user.guard';
import {AppComponent} from './app.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule',
                canLoad: [IsStdUserGuard]
            },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule',
                canLoad: [IsAdminUserGuard]
            }
        ]
    }
];
