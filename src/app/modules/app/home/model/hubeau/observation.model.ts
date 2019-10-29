import {Moment} from 'moment';

export class Observation {
    code_site: string;
    code_station: string;
    grandeur_hydro: string;
    date_debut_serie: Moment;
    date_fin_serie: Moment;
    statut_serie: number;
    code_systeme_alti_serie: number;
    date_obs: Moment;
    resultat_obs: number;
    code_methode_obs: number;
    libelle_methode_obs: string;
    code_qualification_obs: number;
    libelle_qualification_obs: string;
    continuite_obs_hydro: boolean;
    longitude: number;
    latitude: number;
}
