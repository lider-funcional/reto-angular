import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerasRoutingModule } from './carreras-routing.module';
import { ComponentsModule } from '../components/components.module';
import { CarrerasComponent } from './pages/carreras/carreras.component';


@NgModule({
  declarations: [
    CarrerasComponent
  ],
  imports: [
    CommonModule,
    CarrerasRoutingModule,
    ComponentsModule
  ],

})
export class CarrerasModule { }
