import {Component, Input} from '@angular/core';
import {HubeauService, ObservationRequestParam} from '../../../../services/hubeau.service';
import {Observations} from '../../../../model/hubeau/observations.model';

@Component({
    selector: 'hubeau-observations-chart',
    templateUrl: './hubeau-observations-chart.component.html',
    styleUrls: ['./hubeau-observations-chart.component.scss'],
})
export class HubeauObservationsChartComponent {

    @Input() chartType: string;
    chartData: Array<any>;

    constructor(private readonly hubeauService: HubeauService) {
    }

    @Input()
    set observationRequestParams(observationRequestParam: ObservationRequestParam) {
        this.hubeauService
            .fetchObservations(observationRequestParam)
            .subscribe(observations => this.buildChartData(observations));
    }

    private buildChartData(observations: Observations): void {
        this.chartData = [];
        observations.data
            .sort((obs1, obs2) => obs1.date_obs.isAfter(obs2.date_obs) ? 1 : -1);
        observations.data
            .forEach(observation => this.chartData.push([observation.date_obs.format('hh:mm'), observation.resultat_obs]));
    }
}
