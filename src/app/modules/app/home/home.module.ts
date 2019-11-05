import {NgModule} from '@angular/core';
import {HomePage} from './pages/home/home.page';
import {HubeauService} from './services/hubeau.service';
import {HttpClientModule} from '@angular/common/http';
import {GoogleChartsModule} from 'angular-google-charts';
import {CommonModule} from '@angular/common';
import {HubeauObservationsChartComponent} from './components/hubeau/charts/observations/hubeau-observations-chart.component';
import {BigDataService} from './services/big-data.service';

const components: any[] = [
    HubeauObservationsChartComponent
];
const services: any[] = [
    HubeauService,
    BigDataService
];
const pages: any[] = [
    HomePage
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        GoogleChartsModule.forRoot()
    ],
    declarations: [
        components,
        pages
    ],
    providers: [
        services
    ]
})
export class HomeModule {
    constructor() {
        console.log('HomeModule loaded');
    }
}
