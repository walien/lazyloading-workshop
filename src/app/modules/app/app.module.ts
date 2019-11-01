import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppCommonModule} from './app-common/app-common.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';

const components: any[] = [
    AppComponent
];

@NgModule({
    declarations: [
        components
    ],
    imports: [
        RouterModule.forChild(appRoutes),

        AppCommonModule
    ],
    providers: []
})
export class AppModule {
}
