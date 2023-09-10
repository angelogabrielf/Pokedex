import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-editar-pokemon',
  templateUrl: './editar-pokemon.page.html',
  styleUrls: ['./editar-pokemon.page.scss'],
})
export class EditarPokemonPage implements OnInit {
  pokemon: any | null = null;
  nome: string = '';
  poder: number = 0;
  tipo: string = '';
  regiao: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonParam = this.route.snapshot.paramMap.get('pokemon');
    if (pokemonParam) {
      this.pokemon = JSON.parse(pokemonParam);
      this.nome = this.pokemon?.nome || '';
      this.poder = this.pokemon?.poder || 0;
      this.tipo = this.pokemon?.tipo || '';
      this.regiao = this.pokemon?.regiao || '';
    }
  }

  editarPokemon() {
    if (this.pokemon) {
      const nomePokemon = this.pokemon.nome; // Obtém o nome do Pokémon selecionado
      const index = this.pokemonService.listarPokemons().findIndex(p => p.nome === nomePokemon);
      
      if (index > -1) {
        // O Pokémon foi encontrado na lista, continue com a edição
        this.pokemonService.listarPokemons()[index] = {
          nome: this.nome,
          poder: this.poder,
          tipo: this.tipo,
          regiao: this.regiao,
        };
        this.router.navigate(['/lista-pokemon']);
      } else {
        console.log('Pokémon não encontrado na lista.');
      }
    } else {
      console.log('Pokémon não encontrado.');
    }
  }
}    


  
