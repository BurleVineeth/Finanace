import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./dashboard/home/home.component').then((c) => c.HomeComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: 'add-user',
        loadComponent: () =>
          import('./features/add-user/add-user.component').then(
            (c) => c.AddUserComponent,
          ),
      },
    ],
  },
];
