import {ModuleWithProviders, NgModule} from '@angular/core';
import {LoginPage} from './pages/login/login.page';
import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';
import {IsStdUserGuard} from './guards/is-std-user.guard';
import {IsAdminUserGuard} from './guards/is-admin-user.guard';
import {LogoutButtonComponent} from './components/logout-button/logout-button.component';
import {UserActionsComponent} from './components/user-actions/user-actions.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {authRoutes} from './auth.routes';

const components: any[] = [
    UserActionsComponent,
    LogoutButtonComponent
];
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
        FormsModule,
        CommonModule,
        RouterModule.forChild(authRoutes)
    ],
    declarations: [
        components,
        pages
    ],
    exports: [
        components
    ]
})
export class AuthModule {
    constructor() {
        console.log('AuthModule loaded');
    }

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [services, guards]
        };
    }

    public static forChild(): ModuleWithProviders {
        return {
            ngModule: AuthModule
        };
    }
}
