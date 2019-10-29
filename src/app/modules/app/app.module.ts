import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {AdminModule} from './admin/admin.module';
import {AppCommonModule} from './app-common/app-common.module';
import {RouterModule} from '@angular/router';

const components: any[] = [
    AppComponent
];

@NgModule({
    declarations: [
        components
    ],
    imports: [
        BrowserModule,
        RouterModule,

        AppCommonModule,

        HomeModule,
        AdminModule
    ],
    providers: []
})
export class AppModule {
}
