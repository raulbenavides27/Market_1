import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'favorito',
    loadChildren: () => import('./favorito/favorito.module').then( m => m.FavoritoPageModule)
  },
  {
    path: 'pendientes',
    loadChildren: () => import('./pendientes/pendientes.module').then( m => m.PendientesPageModule)
  },
  {
    path: 'crearlista',
    loadChildren: () => import('./crearlista/crearlista.module').then( m => m.CrearlistaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
