import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Jesus',
    favoritos: [
      { id: 1, nombre: 'DB Kakarot' },
      { id: 2, nombre: 'League of Legends' },
      { id: 3, nombre: 'Warframe' }
    ]
  }

  guardar () {
    console.log('Guardado con éxito!');
  }

  eliminar (index: number) {
    this.persona.favoritos.splice(index, 1);
  }
  agregarJuego () {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

}
