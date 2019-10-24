import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authRoutes} from './modules/auth/auth-routing.module';
import {homeRoutes} from './modules/home/home-routing.module';
import {adminRoutes} from './modules/admin/admin-routing.module';


const routes: Routes = [
    {
        path: 'login',
        children: authRoutes
    },
    {
        path: 'home',
        children: homeRoutes
    },
    {
        path: 'admin',
        children: adminRoutes
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
