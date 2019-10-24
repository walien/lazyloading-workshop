import { NgModule } from '@angular/core';
import {HomePage} from './pages/home/home.page';
import {RouterModule} from '@angular/router';
import {homeRoutes} from './home-routing.module';

@NgModule({
    // imports: [
    //     RouterModule.forChild(homeRoutes)
    // ],
    declarations: [
        HomePage
    ]
})
export class HomeModule {
    constructor() {
        console.log('HomeModule loaded');
    }
}
