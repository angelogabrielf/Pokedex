import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarPokemonPage } from './adicionar-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarPokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarPokemonPageRoutingModule {}
