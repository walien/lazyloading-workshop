import {Localization} from '../../../app-common/model/localization.model';
import {ObservationRequestParam} from '../../services/hubeau.service';

export interface LocalizationHydrometry {
    localization: Localization;
    apiParams: ObservationRequestParam;
}
