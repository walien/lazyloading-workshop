import {Routes} from '@angular/router';

export const appRootRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './modules/auth/auth.module#AuthModule'
    },
    {
        path: 'app',
        loadChildren: './modules/app/app.module#AppModule'
    }
];
