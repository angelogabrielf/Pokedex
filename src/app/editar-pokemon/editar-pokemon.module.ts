import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPokemonPageRoutingModule } from './editar-pokemon-routing.module';

import { EditarPokemonPage } from './editar-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPokemonPageRoutingModule
  ],
  declarations: [EditarPokemonPage]
})
export class EditarPokemonPageModule {}
