import {NgModule} from '@angular/core';
import {LoginPage} from './pages/login/login.page';

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
