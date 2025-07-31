import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-alert-doc',
  templateUrl: './alert-doc.component.html',
  styleUrls: ['./alert-doc.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlertDocComponent {
  handleStencilClick() {
    console.log('Alerta clicado!');
  }
}