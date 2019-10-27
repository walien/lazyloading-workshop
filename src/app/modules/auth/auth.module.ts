import {NgModule} from '@angular/core';
import {LoginPage} from './pages/login/login.page';
import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';
import {IsStdUserGuard} from './guards/is-std-user.guard';
import {IsAdminUserGuard} from './guards/is-admin-user.guard';

const components: any[] = [];
const services: any[] = [
    AuthService
];
const guards: any[] = [
    IsStdUserGuard,
    IsAdminUserGuard
];
const pages: any[] = [
    LoginPage
];

@NgModule({
    imports: [
        //     RouterModule.forChild(authRoutes),
        FormsModule
    ],
    declarations: [
        components,
        pages
    ],
    providers: [
        services,
        guards
    ]
})
export class AuthModule {
    constructor() {
        console.log('AuthModule loaded');
    }
}
