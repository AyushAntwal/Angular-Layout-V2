import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';

export const routes: Routes = [{
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.routing').then(m => m.dashboardRoutes),
},
{
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routing').then(m => m.authRoutes),
},
{
    path: 'login',
    component: LoginComponent,
},
{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
},
{
    path: '**',
    redirectTo: 'dashboard',
}
];
