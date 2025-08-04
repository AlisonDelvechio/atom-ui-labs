import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ButtonDocComponent } from './components/button-doc/button-doc.component';
import { AlertDocComponent } from './components/alert-doc/alert-doc.component';
import { MenuAccordionDocComponent } from './components/menu-accordion-doc/menu-accordion-doc.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'button', component: ButtonDocComponent },
  { path: 'alert', component: AlertDocComponent },
  { path: 'menu-accordion', component: MenuAccordionDocComponent }
];