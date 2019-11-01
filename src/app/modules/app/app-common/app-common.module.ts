import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {LocalizationService} from './services/localization.service';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthModule} from '../../auth/auth.module';

const components: any[] = [
    AppHeaderComponent
];
const services: any[] = [
    LocalizationService
];
const pages: any[] = [];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,

        AuthModule.forChild()
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
