import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPokemonPage } from './editar-pokemon.page';

describe('EditarPokemonPage', () => {
  let component: EditarPokemonPage;
  let fixture: ComponentFixture<EditarPokemonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarPokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
