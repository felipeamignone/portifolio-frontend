import { Routes } from '@angular/router';
import { Interactive } from './pages/interactive/interactive';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'interativo',
    component: Interactive
  }
];
