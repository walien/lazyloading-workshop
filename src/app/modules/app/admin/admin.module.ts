import {NgModule} from '@angular/core';
import {AdminPage} from './pages/admin/admin.page';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

const components: any[] = [];
const services: any[] = [];
const pages: any[] = [
    AdminPage
];

@NgModule({
    imports: [
        FormsModule,
        BrowserModule
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
