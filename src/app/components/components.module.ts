import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { CardsComponent } from './cards/cards.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    CardsComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports:[
    CardsComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }
