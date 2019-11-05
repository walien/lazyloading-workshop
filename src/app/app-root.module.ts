import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRootComponent} from './app-root.component';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {appRootRoutes} from './app-root.routes';
import {CommonModule} from '@angular/common';
import {AuthModule} from './modules/auth/auth.module';

const components: any[] = [
    AppRootComponent
];

@NgModule({
    declarations: [
        components
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(appRootRoutes, {useHash: true, preloadingStrategy: PreloadAllModules}),

        AuthModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppRootComponent]
})
export class AppRootModule {
}
