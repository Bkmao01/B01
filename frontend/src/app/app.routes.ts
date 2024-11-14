import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },  // Default route to LoginComponent
  { path: 'dashboard', component: DashboardComponent }
];
