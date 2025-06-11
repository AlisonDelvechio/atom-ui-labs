import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppComponent {
  handleStencilClick() {
    console.log('Botão Stencil clicado!');
    alert('Você clicou no botão Stencil!');
  }
}
