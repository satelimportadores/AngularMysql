import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamaListComponent } from './components/gama-list/gama-list.component';


const routes: Routes = [
  {
    path: '',redirectTo:'/games', pathMatch: 'full'
  },
  {
    path: 'games', component: GamaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
