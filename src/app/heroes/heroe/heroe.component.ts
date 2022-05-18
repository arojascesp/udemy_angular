import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  nombre: string = 'IronMan';
  edad: number = 45;
  titulo: string = 'Heroe';

  cambiarNombre(): void {
    this.nombre === 'IronMan'
      ? this.nombre = 'Spider-Man'
      : this.nombre = 'IronMan'
  }

  cambiarEdad(): void {
    this.edad === 45
      ? this.edad = 50
      : this.edad = 45
  }
  constructor() { }

  ngOnInit(): void {
  }

}
