import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemons: any[] = [];

  constructor() { }

  adicionarPokemon(nome: string, poder: number, tipo: string, regiao: string, raridade: string, corRaridade: string) {
    const novoPokemon = {
      nome: nome,
      poder: poder,
      tipo: tipo,
      regiao: regiao,
      raridade: raridade,
      corRaridade: corRaridade,
    };
    this.pokemons.push(novoPokemon);
  }

  listarPokemons() {
    return this.pokemons;
  }
}
