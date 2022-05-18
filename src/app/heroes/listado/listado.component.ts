import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['IronMan', 'Spider-Man', 'Hulk', 'Thor', 'Black Widow'];
  heroeBorrado: string = ''

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
