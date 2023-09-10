import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPokemonPage } from './editar-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPokemonPageRoutingModule {}
