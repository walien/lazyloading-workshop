import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Observations} from '../model/hubeau/Observations';
import {tap} from 'rxjs/operators';

@Injectable()
export class HubeauService {
    private static readonly HUBEAU_BASE_URL = 'https://hubeau.eaufrance.fr/api/v1/hydrometrie/';
    private static readonly HUBEAU_OBSERVATIONS = 'observations_tr';

    constructor(private readonly http: HttpClient) {
    }

    fetchObservations(params: ObservationRequestParam): Observable<Observations> {
        const url = HubeauService.HUBEAU_BASE_URL + HubeauService.HUBEAU_OBSERVATIONS;

        const hubeauParams = new HttpParams()
            .append('date_debut_obs', params.startDate.format())
            .append('date_fin_obs', params.endDate.format())
            .append('distance', String(params.distance))
            .append('latitude', params.latitude)
            .append('longitude', params.longitude)
            .append('size', String(params.size));

        return this.http.get<Observations>(url, {params: hubeauParams})
            .pipe(
                tap(observations => {
                    observations.data.forEach(observation => {
                        observation.date_debut_serie = moment(observation.date_debut_serie);
                        observation.date_fin_serie = moment(observation.date_fin_serie);
                        observation.date_obs = moment(observation.date_obs);
                    });
                })
            );
    }
}

export class ObservationRequestParam {
    startDate: Moment;
    endDate: Moment;
    distance: number;
    latitude: string;
    longitude: string;
    size: number;

    constructor(startDate: Moment, endDate: Moment, latitude: string, longitude: string) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.latitude = latitude;
        this.longitude = longitude;

        this.distance = 5;
        this.size = 1000;
    }
}

