import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterModule, FormsModule, CommonModule, MatIconModule],
})
export class HomeComponent {
  // Barra de busca
  search = '';
  components = [
    { name: 'Botão', path: '/button', description: 'Botão customizável do sistema' },
    { name: 'Alerta', path: '/alert', description: 'Componente de aviso/feedback visual' },
    { name: 'Menu Accordion', path: '/menu-accordion', description: 'Componente de aviso/feedback visual' },
  ];

  get filteredComponents() {
    return this.components.filter(c =>
      c.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  // Botao de copiar e colar
  loaderCode = `import { defineCustomElements } from 'atom-ui/loader';
  defineCustomElements();`;

  monorepoInstall = `"atom-ui": "file:../atom-ui"`;

  copy(content: string) {
    navigator.clipboard.writeText(content).then(() => {
      console.log('Copiado com sucesso!');
    }).catch(() => {
      console.error('Erro ao copiar');
    });
  }
}