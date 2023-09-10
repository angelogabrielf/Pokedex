import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.page.html',
  styleUrls: ['./lista-pokemon.page.scss'],
})
export class ListaPokemonPage implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService, private router: Router , private alertController: AlertController ) { }

  ngOnInit() {
    this.pokemons = this.pokemonService.listarPokemons();
  }

  navegarParaAdicionarPokemon() {
    this.router.navigate(['/adicionar-pokemon']);
  }

  navegarParaEditarPokemon(pokemon: any) {
    this.router.navigate(['/editar-pokemon', { pokemon: JSON.stringify(pokemon) }]);
  }

  async removerPokemon(pokemon: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar Exclusão',
      message: `Você tem certeza de que deseja excluir o Pokémon ${pokemon.nome}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          
          },
        },
        {
          text: 'Excluir',
          handler: () => {
            const index = this.pokemons.indexOf(pokemon);
            if (index > -1) {
              this.pokemons.splice(index, 1); 
            }
          },
        },
      ],
    });

    await alert.present();
  }

  
}