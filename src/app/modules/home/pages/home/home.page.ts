import {Component} from '@angular/core';
import {ObservationRequestParam} from '../../services/hubeau.service';
import * as moment from 'moment';

@Component({
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage {
    chartType = 'ColumnChart';
    observationRequestParam = new ObservationRequestParam(
        moment().subtract(1, 'd'),
        moment(),
        '44.839263',
        '-0.593534'
    );
}
