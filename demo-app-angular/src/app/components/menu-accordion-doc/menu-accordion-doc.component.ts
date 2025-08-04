import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-menu-acordion-doc',
  templateUrl: './menu-accordion-doc.component.html',
  styleUrls: ['./menu-accordion-doc.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [MatIconModule,]
})
export class MenuAccordionDocComponent {
  handleStencilClick() {
    console.log('Botão clicado!');
  }
}