import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [{
    path: 'favorito',
    loadChildren: () => import('../favorito/favorito.module').then( m => m.FavoritoPageModule)
  },
  {
    path: 'pendientes',
    loadChildren: () => import('../pendientes/pendientes.module').then( m => m.PendientesPageModule)
  },
  {
    path: 'crearlista',
    loadChildren: () => import('../crearlista/crearlista.module').then( m => m.CrearlistaPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('../notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mnotas',
    loadChildren: () => import('../mnotas/mnotas.module').then( m => m.MnotasPageModule)
  }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
