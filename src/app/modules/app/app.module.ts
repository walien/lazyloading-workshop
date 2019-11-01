import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {AdminModule} from './admin/admin.module';
import {AppCommonModule} from './app-common/app-common.module';
import {RouterModule} from '@angular/router';
import {AuthModule} from '../auth/auth.module';

const components: any[] = [
    AppComponent
];

@NgModule({
    declarations: [
        components
    ],
    imports: [
        RouterModule,

        AppCommonModule,
        AuthModule,

        HomeModule,
        AdminModule
    ],
    providers: []
})
export class AppModule {
}
