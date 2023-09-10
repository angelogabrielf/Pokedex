import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarPokemonPageRoutingModule } from './adicionar-pokemon-routing.module';

import { AdicionarPokemonPage } from './adicionar-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarPokemonPageRoutingModule
  ],
  declarations: [AdicionarPokemonPage]
})
export class AdicionarPokemonPageModule {}
