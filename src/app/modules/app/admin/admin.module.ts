import {NgModule} from '@angular/core';
import {AdminPage} from './pages/admin/admin.page';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const components: any[] = [];
const services: any[] = [];
const pages: any[] = [
    AdminPage
];

@NgModule({
    imports: [
        CommonModule,
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
export class AdminModule {
    constructor() {
        console.log('AdminModule loaded');
    }
}
