import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path:'carreras',
      loadChildren: () => import('./carreras/carreras.module').then(m => m.CarrerasModule)
    },
    { path:'**', redirectTo:'carreras' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
