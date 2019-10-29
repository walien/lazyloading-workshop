import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRootComponent} from './app-root.component';
import {RouterModule} from '@angular/router';
import {appRootRoutes} from './app-root.routes';
import {AppModule} from './modules/app/app.module';
import {AuthModule} from './modules/auth/auth.module';

const components: any[] = [
    AppRootComponent
];

@NgModule({
    declarations: [
        components
    ],
    imports: [
        RouterModule.forRoot(appRootRoutes, {useHash: true}),
        BrowserModule,

        AppModule,
        AuthModule
    ],
    providers: [],
    bootstrap: [AppRootComponent]
})
export class AppRootModule {
}
