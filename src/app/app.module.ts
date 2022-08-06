import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './carreras/pages/home/home.component';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { CarrerasRoutingModule } from './carreras/carreras-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    CarrerasRoutingModule,
    SharedModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
