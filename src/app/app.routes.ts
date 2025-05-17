import { Routes } from '@angular/router';
import { RoutePaths } from './core/constants';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    children: [
      { path: '', redirectTo: RoutePaths.Home, pathMatch: 'full' },
      {
        path: RoutePaths.Home,
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: RoutePaths.AddUser,
        loadComponent: () =>
          import('./features/add-user/add-user.component').then(
            (c) => c.AddUserComponent,
          ),
      },
      {
        path: RoutePaths.Tasks,
        loadComponent: () =>
          import('./features/tasks/tasks/tasks.component').then(
            (c) => c.TasksComponent,
          ),
      },
    ],
  },
];
