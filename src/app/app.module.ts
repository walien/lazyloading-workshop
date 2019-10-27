import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './modules/auth/auth.module';
import {HomeModule} from './modules/home/home.module';
import {AdminModule} from './modules/admin/admin.module';
import {AppHeaderComponent} from './components/app-header/app-header.component';

const components: any[] = [
    AppComponent,
    AppHeaderComponent
];

@NgModule({
    declarations: [
        components
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        AuthModule,
        HomeModule,
        AdminModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
