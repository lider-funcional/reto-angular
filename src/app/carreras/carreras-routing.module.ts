import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarrerasComponent } from './pages/carreras/carreras.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'home', component:HomeComponent },
      { path:'carreras', component:CarrerasComponent },
       { path:'**', redirectTo:'home' },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrerasRoutingModule { }
