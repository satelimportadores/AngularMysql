import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamaListComponent } from './components/gama-list/gama-list.component';
import { GamaFormComponent} from './components/gama-form/gama-form.component'


const routes: Routes = [
    {
      path: '',redirectTo:'/games', pathMatch: 'full'
    },
    {
      path: 'games', component: GamaListComponent
    },
    {
      path: 'games/add',component: GamaFormComponent
    }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
