import { NgModule } from '@angular/core';
import { HidenavContentDirective } from './hidenav-content.directive';
import { HidenavHeaderDirective } from './hidenav-header.directive';
import { HidenavStretchheaderComponent } from './hidenav-stretchheader.component';
import { HidenavShContentDirective } from './hidenav-sh-content.directive';
import { SwipeTabDirective } from './swipe-tab.directive';

@NgModule({
    declarations: [
        HidenavContentDirective,
        HidenavHeaderDirective,
        HidenavStretchheaderComponent,
        HidenavShContentDirective,
        SwipeTabDirective,
    ],
    exports: [
        HidenavContentDirective,
        HidenavHeaderDirective,
        HidenavStretchheaderComponent,
        HidenavShContentDirective,
        SwipeTabDirective
    ]
})
export class DirectivesModule { }