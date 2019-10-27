import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authRoutes} from './modules/auth/auth-routing.module';
import {homeRoutes} from './modules/home/home-routing.module';
import {adminRoutes} from './modules/admin/admin-routing.module';
import {IsStdUserGuard} from './modules/auth/guards/is-std-user.guard';
import {IsAdminUserGuard} from './modules/auth/guards/is-admin-user.guard';

const routes: Routes = [
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
        path: 'home',
        children: homeRoutes,
        canActivate: [IsStdUserGuard]
    },
    {
        path: 'admin',
        children: adminRoutes,
        canActivate: [IsAdminUserGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
