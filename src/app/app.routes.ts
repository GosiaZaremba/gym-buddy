import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'new-training-session',
    loadComponent: () =>
      import('./components/main-page/main-page.component').then(
        (m) => m.MainPageComponent
      ), // Placeholder, replace with your target component
  },
];
