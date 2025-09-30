import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/main-page/main-page.component').then(
        (m) => m.MainPageComponent
      ),
  },
  {
    path: 'new-training-session',
    loadComponent: () =>
      import('./components/training-session/training-session.component').then(
        (m) => m.TrainingSessionComponent
      ),
  },
  {
    path: 'training-log',
    loadComponent: () =>
      import('./components/training-log/training-log.component').then(
        (m) => m.TrainingLogComponent
      ),
  },
];
