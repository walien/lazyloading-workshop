import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {LocalizationService} from './services/localization.service';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

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
        RouterModule
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
