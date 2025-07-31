import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterModule, FormsModule, CommonModule],
})
export class HomeComponent {
  search = '';
  components = [
    { name: 'Botão', path: '/button', description: 'Botão customizável do sistema' },
    { name: 'Alerta', path: '/alert', description: 'Componente de aviso/feedback visual' },
  ];

  get filteredComponents() {
    return this.components.filter(c =>
      c.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
