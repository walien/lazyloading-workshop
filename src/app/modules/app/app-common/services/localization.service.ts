import {Injectable} from '@angular/core';
import * as dbInit from './localizations-init.db';
import {Localization} from '../model/localization.model';

@Injectable()
export class LocalizationService {

    private readonly LOCAL_STORAGE_KEY: string = 'll_wkshop_localizations';

    public getLocalizations(): Localization[] {
        const storedLocalizations = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY));
        if (!storedLocalizations) {
            return this.initDb();
        }
        return storedLocalizations;
    }

    public getEnabledLocalizations(): Localization[] {
        return this.getLocalizations().filter(localization => localization.enabled);
    }

    private initDb(): Localization[] {
        const localizationsToStore = dbInit.localizations.map(localization => {
            localization.enabled = true;
            return localization;
        });
        return this.storeLocalizations(localizationsToStore);
    }

    public storeLocalizations(localizations: Localization[]): Localization[] {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(localizations));
        return localizations;
    }
}
