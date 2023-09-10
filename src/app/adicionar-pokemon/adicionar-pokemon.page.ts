import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-pokemon',
  templateUrl: './adicionar-pokemon.page.html',
  styleUrls: ['./adicionar-pokemon.page.scss'],
})
export class AdicionarPokemonPage implements OnInit {
  nome: string = '';
  poder: number = 0; 
  tipo: string = ''; 
  regiao: string = ''; 
  raridade: string='';
  corRaridade: string = '';

  coresPorRaridade: { [raridade: string]: string } = {
    Comum: 'green',    // Define a cor verde para a raridade Comum
    Incomum: 'blue',   // Define a cor azul para a raridade Incomum
    Raro: 'purple',    // Define a cor roxa para a raridade Raro
    Lendário: 'gold',  // Define a cor dourada para a raridade Lendário
  };
  

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
  }

  navegarParaListaPokemon() {
    this.router.navigate(['/lista-pokemon']);
  }

 adicionarPokemon() {
  if (this.nome && this.poder !== null && this.tipo && this.regiao && this.raridade) {
    // Define a cor correspondente com base na raridade selecionada
    const corRaridade = this.coresPorRaridade[this.raridade];

    // Adiciona o Pokémon com todos os detalhes, incluindo a cor da raridade
    this.pokemonService.adicionarPokemon(this.nome, this.poder, this.tipo, this.regiao, this.raridade, corRaridade);

    // Redireciona para a página da lista de Pokémon
    this.router.navigate(['/lista-pokemon']);
  } else {
    console.log('Preencha todos os campos.');
  }
}

}
