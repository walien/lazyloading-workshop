import {Component, OnInit} from '@angular/core';
import {HubeauService, ObservationRequestParam} from '../../services/hubeau.service';
import {Moment} from 'moment';
import * as moment from 'moment';

@Component({
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
    constructor(private readonly hubeauService: HubeauService) {
    }

    ngOnInit(): void {
        const observationRequestParam = new ObservationRequestParam(
            moment().subtract(1, 'd'),
            moment(),
            '44.839263',
            '-0.593534'
        );

        this.hubeauService.fetchObservations(observationRequestParam).subscribe(observations => {
            console.log(observations);
        });
    }
}
