import {Observation} from './observation.model';

export class Observations {
    count: string;
    first: string;
    prev: string;
    next: string;
    api_version: string;
    data: Array<Observation>;
}
