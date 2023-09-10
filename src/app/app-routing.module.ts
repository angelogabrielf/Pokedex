import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lista-pokemon', pathMatch: 'full' },
  { path: 'lista-pokemon', loadChildren: () => import('./lista-pokemon/lista-pokemon.module').then(m => m.ListaPokemonPageModule) },
  { path: 'adicionar-pokemon', loadChildren: () => import('./adicionar-pokemon/adicionar-pokemon.module').then(m => m.AdicionarPokemonPageModule) },
  {
    path: 'editar-pokemon',
    loadChildren: () => import('./editar-pokemon/editar-pokemon.module').then( m => m.EditarPokemonPageModule)
  },
  {
    path: 'lista-pokemon',
    loadChildren: () => import('./lista-pokemon/lista-pokemon.module').then(m => m.ListaPokemonPageModule
      ),
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


