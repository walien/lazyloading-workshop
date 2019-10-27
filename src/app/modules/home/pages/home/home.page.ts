import {Component, OnInit} from '@angular/core';
import {ObservationRequestParam} from '../../services/hubeau.service';
import {LocalizationService} from '../../../app-common/services/localization.service';
import * as moment from 'moment';
import {Localization} from '../../../app-common/model/localization.model';
import {LocalizationHydrometry} from '../model/localization-hydrometry.model';

@Component({
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

    public localizationHydrometry: LocalizationHydrometry[];

    constructor(private localizationService: LocalizationService) {
    }

    ngOnInit(): void {
        this.localizationHydrometry = this.localizationService
            .getEnabledLocalizations()
            .map(localization => this.buildLocalizationHydrometry(localization));
    }

    private buildLocalizationHydrometry(localization: Localization): LocalizationHydrometry {
        return {
            localization,
            apiParams: new ObservationRequestParam(
                moment().subtract(1, 'd'),
                moment(),
                localization.latitude,
                localization.longitude
            )
        };
    }
}
