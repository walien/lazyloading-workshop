import { NgModule } from '@angular/core';
import {LoginPage} from './pages/login/login.page';
import {RouterModule} from '@angular/router';
import {authRoutes} from './auth-routing.module';

@NgModule({
    // imports: [
    //     RouterModule.forChild(authRoutes)
    // ],
    declarations: [
        LoginPage
    ]
})
export class AuthModule {
    constructor() {
        console.log('AuthModule loaded');
    }
}
