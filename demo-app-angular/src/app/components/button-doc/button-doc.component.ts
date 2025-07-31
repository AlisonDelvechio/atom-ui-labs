import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-button-doc',
  templateUrl: './button-doc.component.html',
  styleUrls: ['./button-doc.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonDocComponent {
  handleStencilClick() {
    console.log('Botão clicado!');
  }
}