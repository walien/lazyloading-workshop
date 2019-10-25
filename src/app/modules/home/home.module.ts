import { NgModule } from '@angular/core';
import {HomePage} from './pages/home/home.page';
import {RouterModule} from '@angular/router';
import {homeRoutes} from './home-routing.module';
import {HubeauService} from './services/hubeau.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
       HttpClientModule
    ],
    declarations: [
        HomePage
    ],
    providers: [
        HubeauService
    ]
})
export class HomeModule {
    constructor() {
        console.log('HomeModule loaded');
    }
}
