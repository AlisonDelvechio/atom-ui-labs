import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-button-doc',
  templateUrl: './button-doc.component.html',
  styleUrls: ['./button-doc.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [MatIconModule,]

})
export class ButtonDocComponent {
  handleStencilClick() {
    console.log('Botão clicado!');
  }
}