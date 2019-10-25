import { NgModule } from '@angular/core';
import {HomePage} from './pages/home/home.page';
import {RouterModule} from '@angular/router';
import {homeRoutes} from './home-routing.module';
import {HubeauService} from './services/hubeau.service';
import {HttpClientModule} from '@angular/common/http';
import {GoogleChartsModule} from 'angular-google-charts';
import {HubeauObservationsChart} from './components/hubeau/charts/observations/hubeauObservationsChart.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        HttpClientModule,
        GoogleChartsModule.forRoot(),
        CommonModule,
    ],
    declarations: [
        HomePage,

        HubeauObservationsChart
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
