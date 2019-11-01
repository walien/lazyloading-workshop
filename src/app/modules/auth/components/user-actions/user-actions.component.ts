import {Component, Input} from '@angular/core';
import {User} from '../../model/user.model';

@Component({
    selector: 'user-actions',
    templateUrl: './user-actions.component.html',
    styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent {

    @Input() user: User;

}
