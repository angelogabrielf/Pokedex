import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarPokemonPage } from './adicionar-pokemon.page';

describe('AdicionarPokemonPage', () => {
  let component: AdicionarPokemonPage;
  let fixture: ComponentFixture<AdicionarPokemonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdicionarPokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
