import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarrerasRoutingModule } from '../carreras/carreras-routing.module';


@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CarrerasRoutingModule
  ],
  exports:[
    MenuComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
