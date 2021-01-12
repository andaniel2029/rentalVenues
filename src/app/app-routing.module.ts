import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { VenuesDetailComponent } from './components/venues-detail/venues-detail.component';
import { VenuesListComponent } from './components/venues-list/venues-list.component';
import { AddVenuesComponent } from './components/add-venues/add-venues.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'add-venues', component: AddVenuesComponent },
  { path: 'venues-list', component: VenuesListComponent },
  { path: 'detail-venues/:id', component: VenuesDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
