import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { QuickstartBoxModule } from 'src/app/components/quickstart-box/quickstart-box.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
    declarations: [
        OverviewComponent
    ],
    imports: [
        CommonModule,
        OverviewRoutingModule,
        QuickstartBoxModule,
        FooterModule,
    ]
})
export class OverviewModule { }
