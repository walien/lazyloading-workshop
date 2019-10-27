import {Component, OnInit} from '@angular/core';
import {Localization} from '../../../app-common/model/localization.model';
import {LocalizationService} from '../../../app-common/services/localization.service';

@Component({
    templateUrl: './admin.page.html',
    styleUrls: ['./admin.page.scss']
})
export class AdminPage implements OnInit {

    public localizations: Localization[];

    constructor(private localizationService: LocalizationService) {    }

    ngOnInit(): void {
        this.localizations = this.localizationService.getLocalizations();
    }

    public storeLocalizations(): void {
        this.localizationService.storeLocalizations(this.localizations);
    }
}
