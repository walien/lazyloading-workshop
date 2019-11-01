import {NgModule} from '@angular/core';
import {AdminPage} from './pages/admin/admin.page';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {adminRoutes} from './admin.routes';

const components: any[] = [];
const services: any[] = [];
const pages: any[] = [
    AdminPage
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(adminRoutes)
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
