import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthModule} from '../auth/auth.module';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {BrowserModule} from '@angular/platform-browser';

const components: any[] = [
    AppHeaderComponent
];
const services: any[] = [
];
const pages: any[] = [
];

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,

        AuthModule
    ],
    declarations: [
        components,
        pages
    ],
    exports: [
        components
    ],
    providers: [
        services
    ]
})
export class AppCommonModule {
    constructor() {
        console.log('AppCommonModule loaded');
    }
}
