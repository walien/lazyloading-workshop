import {NgModule} from '@angular/core';
import {AdminPage} from './pages/admin/admin.page';

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
