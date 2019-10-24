import { NgModule } from '@angular/core';
import {AdminPage} from './pages/admin/admin.page';
import {RouterModule} from '@angular/router';
import {adminRoutes} from './admin-routing.module';

@NgModule({
    // imports: [
    //     RouterModule.forChild(adminRoutes)
    // ],
    declarations: [
        AdminPage
    ]
})
export class AdminModule {
    constructor() {
        console.log('AdminModule loaded');
    }
}
