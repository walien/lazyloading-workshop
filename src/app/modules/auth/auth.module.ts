import {NgModule} from '@angular/core';
import {LoginPage} from './pages/login/login.page';
import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';

const components: any[] = [];
const services: any[] = [
    AuthService
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
        services
    ]
})
export class AuthModule {
    constructor() {
        console.log('AuthModule loaded');
    }
}
